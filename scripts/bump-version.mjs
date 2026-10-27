import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const pkgPath = path.join(rootDir, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

const currentVer = pkg.version;
const arg = process.argv[2] || 'patch';

let newVer = currentVer;

if (/^\d+\.\d+\.\d+.*$/.test(arg)) {
  newVer = arg;
} else {
  const parts = currentVer.split('.').map(n => parseInt(n, 10));
  while (parts.length < 3) parts.push(0);

  if (arg === 'major') {
    parts[0] += 1;
    parts[1] = 0;
    parts[2] = 0;
  } else if (arg === 'minor') {
    parts[1] += 1;
    parts[2] = 0;
  } else {
    // patch default
    parts[2] += 1;
  }
  newVer = parts.join('.');
}

console.log(`Bumping version: ${currentVer} -> ${newVer}`);

// 1. package.json
pkg.version = newVer;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
console.log('✔ Updated package.json');

// 2. src-tauri/tauri.conf.json
const tauriPath = path.join(rootDir, 'src-tauri', 'tauri.conf.json');
if (fs.existsSync(tauriPath)) {
  const tauri = JSON.parse(fs.readFileSync(tauriPath, 'utf8'));
  tauri.version = newVer;
  fs.writeFileSync(tauriPath, JSON.stringify(tauri, null, 2) + '\n', 'utf8');
  console.log('✔ Updated src-tauri/tauri.conf.json');
}

// 3. index.html
const indexPath = path.join(rootDir, 'index.html');
if (fs.existsSync(indexPath)) {
  let indexHtml = fs.readFileSync(indexPath, 'utf8');
  indexHtml = indexHtml.replace(/<span class="brand-badge">[^<]*<\/span>/g, `<span class="brand-badge">v${newVer}</span>`);
  indexHtml = indexHtml.replace(/<span class="form-kicker">ACTIVACIÓN DE PRODUCTO [^<]*<\/span>/g, `<span class="form-kicker">ACTIVACIÓN DE PRODUCTO • v${newVer}</span>`);
  indexHtml = indexHtml.replace(/<span class="admin-version-pill">[^<]*<\/span>/g, `<span class="admin-version-pill">v${newVer}</span>`);
  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  console.log('✔ Updated index.html');
}

// 4. main.js
const mainPath = path.join(rootDir, 'main.js');
if (fs.existsSync(mainPath)) {
  let mainJs = fs.readFileSync(mainPath, 'utf8');
  mainJs = mainJs.replace(/const APP_VERSION = '[^']*';/g, `const APP_VERSION = '${newVer}';`);
  mainJs = mainJs.replace(/PsiOS v[0-9.]+ • Modo Clínico Activo/g, `PsiOS v${newVer} • Modo Clínico Activo`);
  fs.writeFileSync(mainPath, mainJs, 'utf8');
  console.log('✔ Updated main.js');
}

// 5. licensing/license-service.js
const licPath = path.join(rootDir, 'licensing', 'license-service.js');
if (fs.existsSync(licPath)) {
  let licJs = fs.readFileSync(licPath, 'utf8');
  licJs = licJs.replace(/'X-PsiOS-Version': '[^']*'/g, `'X-PsiOS-Version': '${newVer}'`);
  licJs = licJs.replace(/appVersion: '[^']*'/g, `appVersion: 'v${newVer}'`);
  licJs = licJs.replace(/\* Versión: [^\n\r]*/g, `* Versión: v${newVer}`);
  fs.writeFileSync(licPath, licJs, 'utf8');
  console.log('✔ Updated licensing/license-service.js');
}

// 6. cloudflare/worker.js
const workerPath = path.join(rootDir, 'cloudflare', 'worker.js');
if (fs.existsSync(workerPath)) {
  let workerJs = fs.readFileSync(workerPath, 'utf8');
  workerJs = workerJs.replace(/version: '[^']*',/g, `version: 'v${newVer}',`);
  workerJs = workerJs.replace(/\* Versión: [^\n\r]*/g, `* Versión: v${newVer}`);
  fs.writeFileSync(workerPath, workerJs, 'utf8');
  console.log('✔ Updated cloudflare/worker.js');
}

console.log(`\n🎉 PsiOS version successfully bumped to v${newVer}!`);
