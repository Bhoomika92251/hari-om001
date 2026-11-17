@echo off
color 0A
title GitHub Push - DreamSpace Project

echo.
echo  =====================================================
echo   CONNECTING PROJECT TO GITHUB
echo   Repo: https://github.com/Bhoomika92251/perfume-zone
echo  =====================================================
echo.
echo  Git will now ask you to sign in to GitHub.
echo  A BROWSER WINDOW will open automatically.
echo.
echo  Steps:
echo  1. Browser opens to GitHub login
echo  2. Sign in as Bhoomika92251
echo  3. Click "Authorize" 
echo  4. Come back here - push starts automatically!
echo.
echo  Press any key to start...
pause >nul

cd /d "c:\Users\DELL\OneDrive\Desktop\hari om 001_files"

REM Stage any new files
"C:\Users\DELL\AppData\Local\Programs\Git\cmd\git.exe" add .

REM Commit any pending changes
"C:\Users\DELL\AppData\Local\Programs\Git\cmd\git.exe" commit -m "update: latest changes" 2>nul

REM Set remote
"C:\Users\DELL\AppData\Local\Programs\Git\cmd\git.exe" remote set-url origin https://github.com/Bhoomika92251/perfume-zone.git

REM Push - this triggers browser login
echo.
echo  Pushing to GitHub...
echo.
"C:\Users\DELL\AppData\Local\Programs\Git\cmd\git.exe" push -u origin main

echo.
if %ERRORLEVEL% == 0 (
    color 0A
    echo  =====================================================
    echo   SUCCESS! Your project is now on GitHub!
    echo.  
    echo   Visit: https://github.com/Bhoomika92251/perfume-zone
    echo  =====================================================
) else (
    color 0C
    echo  =====================================================
    echo   Something went wrong. See error above.
    echo   Make sure you signed in to GitHub in the browser.
    echo  =====================================================
)
echo.
pause
