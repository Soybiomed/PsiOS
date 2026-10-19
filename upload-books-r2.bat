@echo off
chcp 65001 > nul
echo.
echo ========================================================
echo     PsiOS - Subir Libros a Cloudflare R2 (psios-recursos)
echo ========================================================
echo.

echo Verificando sesion de Cloudflare...
call npx wrangler whoami > nul 2>&1
if %errorlevel% neq 0 (
  echo.
  echo [!] Iniciando sesion en Cloudflare...
  echo Se abrira una ventana en tu navegador. Haz clic en "Allow" o "Autorizar".
  echo.
  call npx wrangler login
)

echo.
echo Sesion confirmada. Iniciando subida de libros y portadas...
echo.
node scripts\upload-r2.mjs

echo.
pause
