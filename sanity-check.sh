#!/usr/bin/env bash
set -e

echo "🔍 Running sanity checks for React + Vite + Tailwind project..."

# 1. Check Node & package manager
echo "👉 Checking Node.js and package manager..."
node -v || { echo "❌ Node.js is not installed"; exit 1; }
if command -v pnpm &> /dev/null; then
  echo "✅ pnpm detected: $(pnpm -v)"
elif command -v npm &> /dev/null; then
  echo "✅ npm detected: $(npm -v)"
else
  echo "❌ No npm/pnpm found. Please install one."; exit 1;
fi

# 2. Check vite.config.js for React plugin
echo "👉 Checking vite.config.js for React plugin..."
if grep -q "@vitejs/plugin-react" vite.config.js 2>/dev/null; then
  echo "✅ Vite React plugin found"
else
  echo "⚠️  React plugin not found in vite.config.js – add:"
  echo 'import react from "@vitejs/plugin-react";'
  echo 'plugins: [react()]'
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
if pnpm -v &> /dev/null; then
  pnpm run build || { echo "❌ Vite build failed"; exit 1; }
else
  npm run build || { echo "❌ Vite build failed"; exit 1; }
fi

echo "🎉 All sanity checks passed!"

