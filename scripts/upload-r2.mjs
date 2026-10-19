import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const BUCKET_NAME = 'psios-recursos';
const LOCAL_DIR = path.resolve('public/libros');

console.log('\n\x1b[36m=== Subida de Libros y Recursos a Cloudflare R2 ===\x1b[0m\n');
console.log(`Bucket de destino: \x1b[32m${BUCKET_NAME}\x1b[0m`);
console.log(`Directorio local: \x1b[33m${LOCAL_DIR}\x1b[0m\n`);

if (!fs.existsSync(LOCAL_DIR)) {
  console.error(`\x1b[31mError: No se encontró el directorio ${LOCAL_DIR}\x1b[0m`);
  process.exit(1);
}

const files = fs.readdirSync(LOCAL_DIR);

function getMimeType(filename) {
  const ext = path.extname(filename).toLowerCase();
  if (ext === '.pdf') return 'application/pdf';
  if (ext === '.png') return 'image/png';
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
  return 'application/octet-stream';
}

for (const file of files) {
  const filePath = path.join(LOCAL_DIR, file);
  const stat = fs.statSync(filePath);
  if (!stat.isFile()) continue;

  const mime = getMimeType(file);
  const r2Key = `libros/${file}`;
  const sizeMb = (stat.size / (1024 * 1024)).toFixed(2);

  console.log(`\x1b[34mSubiendo (${sizeMb} MB):\x1b[0m ${file} -> \x1b[32m${r2Key}\x1b[0m ...`);

  try {
    const cmd = `npx wrangler r2 object put "${BUCKET_NAME}/${r2Key}" --file="${filePath}" --content-type="${mime}"`;
    execSync(cmd, { stdio: 'inherit' });
    console.log(`✔ \x1b[32mCompletado: ${file}\x1b[0m\n`);
  } catch (err) {
    console.error(`\x1b[31m✘ Error subiendo ${file}.\x1b[0m`);
    console.log('\nSi aún no has iniciado sesión en Cloudflare en esta terminal, ejecuta primero:\n  \x1b[33mnpx wrangler login\x1b[0m\n');
    process.exit(1);
  }
}

console.log('\n\x1b[32m🎉 ¡Todos los libros y portadas se subieron exitosamente a Cloudflare R2!\x1b[0m\n');
