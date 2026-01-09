@echo off
echo Deploying premium images to assets folder...
copy "C:\Users\jaide\.gemini\antigravity\brain\a428f90e-051d-441a-b5b7-435002d6b81a\*.png" "c:\Users\jaide\Desktop\adviser\assets\" /Y
if %errorlevel% neq 0 (
    echo Error copying files!
    pause
    exit /b %errorlevel%
)
echo Images deployed successfully!
pause
