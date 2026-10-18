import { execSync } from 'child_process';

const REMOTE_URL = 'https://github.com/Soybiomed/PsiOS.git';
const BRANCH = 'main';

function run(command) {
  console.log(`\x1b[36m> ${command}\x1b[0m`);
  try {
    return execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`\x1b[31mError ejecutando: ${command}\x1b[0m`);
    throw error;
  }
}

console.log('\n\x1b[32m=== Despliegue de Actualización Online (PsiOS Web) ===\x1b[0m\n');

try {
  // 1. Asegurar rama main
  run(`git branch -M ${BRANCH}`);

  // 2. Verificar y configurar remoto origin
  try {
    execSync('git remote get-url origin', { stdio: 'ignore' });
    run(`git remote set-url origin ${REMOTE_URL}`);
  } catch {
    run(`git remote add origin ${REMOTE_URL}`);
  }

  // 3. Agregar cambios (respetando .gitignore que excluye ejecutables y temporales)
  run('git add -A');

  // 4. Crear commit si hay cambios pendientes
  const status = execSync('git status --porcelain').toString().trim();
  if (status) {
    const commitMsg = process.argv.slice(2).join(' ') || `update(online): actualizacion PsiOS Web ${new Date().toISOString().slice(0, 10)}`;
    run(`git commit -m "${commitMsg}"`);
  } else {
    console.log('\x1b[33mNo hay cambios pendientes por commitear.\x1b[0m');
  }

  // 5. Subir a GitHub
  console.log(`\n\x1b[35mSubiendo actualización a ${REMOTE_URL} (rama ${BRANCH})...\x1b[0m\n`);
  run(`git push -u origin ${BRANCH}`);

  console.log('\n\x1b[32m✔ Despliegue online completado con éxito.\x1b[0m');
  console.log('\x1b[90mGitHub Actions compilará y actualizará GitHub Pages automáticamente.\x1b[0m\n');
} catch (err) {
  console.error('\n\x1b[31m✘ No se pudo completar el push.\x1b[0m');
  console.log('Si es la primera vez, inicia sesión en GitHub en la ventana emergente o verifica tus credenciales.');
  process.exit(1);
}
