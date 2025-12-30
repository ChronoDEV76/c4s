// convert-html-to-next.js
const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(__dirname, "chrono4solutions.nl");
const APP_DIR = path.join(__dirname, "app");

function walkDir(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, fileList);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function extractBody(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) return bodyMatch[1];
  return html; // fallback
}

function extractTitle(html) {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (titleMatch) return titleMatch[1].trim();
  return "Page";
}

function routeFromFile(filePath) {
  const rel = path.relative(SRC_DIR, filePath);          // e.g. "about/index.html"
  const parts = rel.split(path.sep);
  const last = parts[parts.length - 1];

  if (last.toLowerCase() === "index.html") {
    if (parts.length === 1) {
      // chrono4solutions.nl/index.html → app/page.tsx
      return [];
    } else {
      // about/index.html → app/about/page.tsx
      return parts.slice(0, -1);
    }
  }

  // services/web-design.html → app/services/web-design/page.tsx
  const nameWithoutExt = last.replace(/\.html$/i, "");
  return parts.slice(0, -1).concat(nameWithoutExt);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function createPageTsx(routeSegments, bodyHtml, title) {
  const safeHtml = JSON.stringify(bodyHtml); // escapes quotes/newlines

  return `export const metadata = {
  title: ${JSON.stringify(title)},
};

const html = ${safeHtml};

export default function Page() {
  return (
    <main
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
`;
}

function main() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error("Source folder not found:", SRC_DIR);
    process.exit(1);
  }

  const htmlFiles = walkDir(SRC_DIR);
  console.log("Found HTML files:", htmlFiles.length);

  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, "utf8");
    const body = extractBody(html);
    const title = extractTitle(html);
    const route = routeFromFile(file); // [] or ["about"] or ["services","web-design"]

    const destDir =
      route.length === 0 ? APP_DIR : path.join(APP_DIR, ...route);
    ensureDir(destDir);

    const destFile = path.join(destDir, "page.tsx");
    const tsx = createPageTsx(route, body, title);

    fs.writeFileSync(destFile, tsx, "utf8");
    console.log(`Converted ${path.relative(SRC_DIR, file)} -> ${path.relative(APP_DIR, destFile)}`);
  }

  console.log("✅ Done generating Next.js pages.");
}

main();

