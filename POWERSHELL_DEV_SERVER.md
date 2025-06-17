# Running Development Server in PowerShell

## Steps:

1. Open PowerShell as Administrator

2. Navigate to the project directory:

   ```powershell
   cd C:\Users\dusti\HAI\qplldb-hai-clone
   ```

3. Install dependencies (if not already done):

   ```powershell
   npm install
   ```

4. Start the development server:

   ```powershell
   npm run dev
   ```

5. Access the website at:
   - http://localhost:3000

## If you get script execution errors:

Run this command first to allow scripts:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

## Alternative: Use Command Prompt (cmd)

If PowerShell has issues, use Command Prompt instead:

1. Open Command Prompt
2. cd C:\Users\dusti\HAI\qplldb-hai-clone
3. npm run dev
