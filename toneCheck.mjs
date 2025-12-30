#!/usr/bin/env node
// toneCheck v6.1 — Veiligheidsversie (REPORT ONLY)
// - Scant alléén tekstbestanden: app/(site)/**/*.{md,mdx} en content/**/*.{md,mdx}
// - Herkent normatieve veiligheidscontext en boost "feitelijk" & "transparant"
// - Straft “absolute claims” als geen normatieve context
// - Geen auto-fixes. Geen codebestanden. Alleen scores & consistentie.

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// CLI
const args = process.argv.slice(2);
let root = '.';
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--root' && args[i + 1]) {
    root = args[i + 1];
  }
}
root = path.resolve(process.cwd(), root);

const siteDir    = path.join(root, 'app', '(site)');
const contentDir = path.join(root, 'content');

function isTextFile(p) {
  const ext = path.extname(p).toLowerCase();
  return ext === '.md' || ext === '.mdx';
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.isFile() && isTextFile(p)) out.push(p);
  }
  return out;
}

function readFileSafe(p) {
  try {
    return fs.readFileSync(p, 'utf8');
  } catch {
    return '';
  }
}

// TOV Kernwoorden
const NORM_TERMS = [
  'arbowet','bgbop','brl sir','sir','nen','hev 2018','handreiking evenementenveiligheid',
  'veiligheidsregio','vergunning','veiligheidsplan','inspectie','besluit brandveilig gebruik','wet'
];
const NORM_NEAR = [
  'volgens','conform','op grond van','vereist door','vereist volgens','eis uit','voorschrift'
];
const STRONG_REQUIRE = ['moet','verplicht','altijd'];
const ABSOLUTES = ['nooit','altijd','iedereen','niemand','zonder uitzondering'];

const COLLAB_TERMS = ['samen','afspraak','evaluatie','overleg'];
const TRANSP_TERMS  = ['transparant','tarief','kosten','fee','dashboard','btw','uurtarief'];
const AUTON_TERMS   = ['zzp','zelfstandige','ondernemerschap','geen gezagsverhouding','inbedding'];

function approxSentenceWordCounts(text) {
  const parts = text.split(/[\.\!\?]\s+/g);
  return parts.map(s => (s.trim().match(/\b\w+\b/g) || []).length).filter(n => n > 0);
}

function normalize(text) {
  return text
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/\|.*\|\n/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}

function paragraphSplit(text) {
  return text.split(/\n\s*\n/g).map(p => p.trim()).filter(Boolean);
}

function containsAny(text, list) {
  const t = text.toLowerCase();
  return list.some(k => t.includes(k));
}

function countMatches(text, terms) {
  const t = text.toLowerCase();
  return terms.reduce((acc, k) => acc + (t.includes(k) ? 1 : 0), 0);
}

function hasNormativeContext(p) {
  const low = p.toLowerCase();
  const hasNorm = containsAny(low, NORM_TERMS);
  const hasNear = containsAny(low, NORM_NEAR);
  const hasRequire = containsAny(low, STRONG_REQUIRE);
  return hasNorm || (hasRequire && hasNear);
}

function hasNumbersDates(text) {
  const hasNumber = /\b\d{1,4}([.,]\d+)?\b/.test(text);
  const hasDate   = /\b(20\d{2}|19\d{2})\b/.test(text);
  return hasNumber || hasDate;
}

function countOverclaims(text) {
  return countMatches(text, ABSOLUTES);
}

function scoreParagraph(p) {
  const raw = p;
  const text = normalize(raw);
  const normative = hasNormativeContext(text);
  const requireUsed = containsAny(text.toLowerCase(), STRONG_REQUIRE);

  let feitelijk = 60, duidelijk = 83, samen = 61, transparant = 60, auton = 71, nuchter = 85;

  if (normative) feitelijk += 10;
  if (hasNumbersDates(text)) feitelijk += 3;
  if (/[A-Z]{2,}/.test(text)) feitelijk += 2;

  transparant += Math.min(10, countMatches(text, TRANSP_TERMS) * 3);
  if (hasNumbersDates(text)) transparant += 2;

  samen += Math.min(10, countMatches(text, COLLAB_TERMS) * 3);
  auton += Math.min(10, countMatches(text, AUTON_TERMS) * 3);

  const lens = approxSentenceWordCounts(text);
  const longPenalty = lens.some(n => n >= 36) ? 5 : 0;
  duidelijk = Math.max(50, duidelijk - longPenalty);

  if (!normative && countOverclaims(text) > 0) feitelijk -= 5;

  const clamp = v => Math.max(0, Math.min(100, Math.round(v)));
  return {
    feitelijk:   clamp(feitelijk),
    duidelijk:   clamp(duidelijk),
    samen:       clamp(samen),
    transparant: clamp(transparant),
    auton:       clamp(auton),
    nuchter:     clamp(nuchter),
    normative,
    requireUsed
  };
}

function scoreFile(content) {
  const paras = paragraphSplit(content);
  if (paras.length === 0) {
    return {
      perPara: [],
      summary: { feitelijk: 0, duidelijk: 0, samen: 0, transparant: 0, auton: 0, nuchter: 0, fileTone: 0, normativeAny: false }
    };
  }
  const perPara = paras.map(scoreParagraph);
  const avg = key => Math.round(perPara.reduce((a, p) => a + p[key], 0) / perPara.length);
  const normativeAny = perPara.some(p => p.normative);

  const feitelijk = avg('feitelijk');
  const duidelijk = avg('duidelijk');
  const samen     = avg('samen');
  const transp    = avg('transparant');
  const auton     = avg('auton');
  const nuchter   = avg('nuchter');
  const fileTone  = Math.round((feitelijk + duidelijk + samen + transp + auton + nuchter) / 6);

  return {
    perPara,
    summary: {
      feitelijk, duidelijk, samen, transparant: transp, auton, nuchter, fileTone, normativeAny
    }
  };
}

function mean(nums) {
  return nums.length ? nums.reduce((a,b)=>a+b,0)/nums.length : 0;
}

function stddev(nums) {
  if (nums.length < 2) return 0;
  const m = mean(nums);
  const v = mean(nums.map(x => (x - m) ** 2));
  return Math.sqrt(v);
}

function consistencyScore(fileTones) {
  const s = stddev(fileTones);
  return Math.max(0, Math.min(100, Math.round(100 - s * 3.3)));
}

// === RUN ===
const siteFiles    = walk(siteDir);
const contentFiles = walk(contentDir);
const files = [...siteFiles, ...contentFiles];

console.log('🔎 Tone of Voice — Veiligheidsversie v6.1 (REPORT ONLY)');
console.log(`📂 siteDir: ${path.relative(root, siteDir) || 'app/(site)'}`);
console.log(`📂 contentDir: ${path.relative(root, contentDir) || 'content'}`);
console.log(`📄 Files: ${files.length}`);

const results = [];
for (const f of files) {
  const txt = readFileSafe(f);
  const { summary } = scoreFile(txt);
  results.push({ file: path.relative(root, f), summary });
}

for (const r of results) {
  const s = r.summary;
  const normLabel = s.normativeAny ? 'yes' : 'no';
  console.log(`• ${r.file}`);
  console.log(`  veiligheidscontext: ${normLabel}`);
  console.log(`  feitelijk:${s.feitelijk}  duidelijk:${s.duidelijk}  samen:${s.samen}  transparant:${s.transparant}  auton:${s.auton}  nuchter:${s.nuchter}  | File Tone: ${s.fileTone}`);
}

if (results.length === 0) {
  console.log('—');
  console.log('🏁 Overall Tone Score: 0');
  console.log('📊 feitelijk:0  duidelijk:0  samen:0  transparant:0  auton:0  nuchter:0');
  console.log('🔁 Tone Consistency Score: 100');
  process.exit(0);
}

const overall = ['feitelijk','duidelijk','samen','transparant','auton','nuchter'].reduce((acc, k) => {
  acc[k] = Math.round(mean(results.map(r => r.summary[k])));
  return acc;
}, {});

const overallTone = Math.round(mean(results.map(r => r.summary.fileTone)));
const consistency = consistencyScore(results.map(r => r.summary.fileTone));

console.log('—');
console.log(`🏁 Overall Tone Score: ${overallTone}`);
console.log(`📊 feitelijk:${overall.feitelijk}  duidelijk:${overall.duidelijk}  samen:${overall.samen}  transparant:${overall.transparant}  auton:${overall.auton}  nuchter:${overall.nuchter}`);
console.log(`🔁 Tone Consistency Score: ${consistency}`);
console.log('✅ Geen aanpassingen uitgevoerd, alleen analyse.');

