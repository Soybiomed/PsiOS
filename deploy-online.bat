@echo off
chcp 65001 > nul
echo.
echo ========================================================
echo       PsiOS - Despliegue de Actualizacion Online
echo ========================================================
echo.
node scripts\deploy-online.mjs %*
echo.
pause
