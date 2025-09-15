#!/usr/bin/env bash
set -e

echo "🔍 Running sanity checks for React + Vite + Tailwind project..."

# 1. Check Node & package manager
echo "👉 Checking Node.js and package manager..."
node -v || { echo "❌ Node.js is not installed"; exit 1; }

# Choose package manager based on lockfile (fallback to available binary)
PKG_MGR=""
if [ -f pnpm-lock.yaml ]; then
  PKG_MGR=pnpm
elif [ -f package-lock.json ]; then
  PKG_MGR=npm
fi
if [ -z "$PKG_MGR" ]; then
  if command -v pnpm &> /dev/null; then PKG_MGR=pnpm; elif command -v npm &> /dev/null; then PKG_MGR=npm; fi
fi
[ -z "$PKG_MGR" ] && { echo "❌ No npm/pnpm found. Please install one."; exit 1; }
if [ "$PKG_MGR" = "pnpm" ]; then echo "✅ Using pnpm: $(pnpm -v)"; else echo "✅ Using npm: $(npm -v)"; fi

# 2. Check vite.config.js for React plugin
echo "👉 Checking Vite config for React plugin..."
VITE_CONFIG_FILE=""
if [ -f vite.config.jsx ]; then VITE_CONFIG_FILE=vite.config.jsx; fi
if [ -z "$VITE_CONFIG_FILE" ] && [ -f vite.config.js ]; then VITE_CONFIG_FILE=vite.config.js; fi
if [ -n "$VITE_CONFIG_FILE" ] && grep -q "@vitejs/plugin-react" "$VITE_CONFIG_FILE" 2>/dev/null; then
  echo "✅ React plugin found in $VITE_CONFIG_FILE"
else
  echo "⚠️  React plugin not detected – ensure Vite config includes:";
  echo '   import react from "@vitejs/plugin-react";'
  echo '   export default defineConfig({ plugins: [react()] })'
fi

# 3. Check PostCSS config (Tailwind v4 expects @tailwindcss/postcss)
echo "👉 Checking postcss.config.js..."
if grep -q "@tailwindcss/postcss" postcss.config.js 2>/dev/null; then
  echo "✅ Tailwind v4 PostCSS plugin detected"
else
  echo "⚠️  postcss.config.js does not reference '@tailwindcss/postcss'"
fi

# 4. Check JSX files for missing React import
echo "👉 Scanning for 'React.' usage without import..."
files_with_react=$(grep -R "React\." src -n || true)
if [[ -n "$files_with_react" ]]; then
  echo "⚠️  Found direct React.* usage:"
  echo "$files_with_react"
  echo "   → Make sure those files have 'import React from \"react\";' on top."
else
  echo "✅ No direct React.* usage found"
fi

# 5. Run build test
echo "👉 Running Vite build..."

if [ ! -d node_modules ]; then
  echo "⚠️  node_modules is missing. Run '$PKG_MGR install' and retry."
  exit 1
fi

$PKG_MGR run build || { echo "❌ Vite build failed"; exit 1; }

echo "🎉 All sanity checks passed!"
