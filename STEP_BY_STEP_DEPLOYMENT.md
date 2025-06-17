# Step-by-Step Deployment Instructions

## Method 1: Windows Command Prompt Deployment

### Step 1: Open Windows Command Prompt
1. Press `Windows Key + R`
2. Type `cmd` and press Enter
3. Or search for "Command Prompt" in Start menu

### Step 2: Navigate to Project
```cmd
cd C:\Users\dusti\HAI\qplldb-hai-clone
```

### Step 3: Login to Vercel
```cmd
vercel login
```
- Choose "Continue with GitHub" (recommended)
- It will open a browser window
- Click "Authorize" to connect your GitHub account
- Return to command prompt

### Step 4: Deploy the Project
```cmd
vercel
```

You'll be asked several questions:
1. **Set up and deploy?** → Press Enter (Yes)
2. **Which scope?** → Select your account
3. **Link to existing project?** → N (No)
4. **Project name?** → Press Enter (use default: qplldb-hai-clone)
5. **Directory?** → Press Enter (current directory)
6. **Want to override settings?** → N (No)

Wait for deployment (2-3 minutes)

### Step 5: Deploy to Production
After preview deployment succeeds:
```cmd
vercel --prod
```

This creates the production deployment.

### Step 6: Get Your URLs
Vercel will show:
- Preview URL: `https://qplldb-hai-clone-xxxxx.vercel.app`
- Production URL: `https://qplldb-hai-clone.vercel.app`

---

## Method 2: GitHub + Vercel Web Interface

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Name: `qplldb-hai-clone`
3. Private or Public (your choice)
4. Click "Create repository"

### Step 2: Push Code to GitHub
In Windows Command Prompt:
```cmd
cd C:\Users\dusti\HAI\qplldb-hai-clone
git init
git add .
git commit -m "Initial HAI website clone"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/qplldb-hai-clone.git
git push -u origin main
```

### Step 3: Import to Vercel
1. Go to https://vercel.com
2. Click "Add New..." → "Project"
3. Import Git Repository
4. Find and select `qplldb-hai-clone`
5. Click "Import"

### Step 4: Configure Project
- Framework Preset: Next.js (auto-detected)
- Root Directory: ./
- Build Command: `next build` (default)
- Output Directory: Leave empty (default)
- Install Command: `npm install` (default)

### Step 5: Add Environment Variables
Click "Environment Variables" and add:
```
EMAIL_FROM = noreply@qplldb.com
EMAIL_TO = your-email@example.com
```

### Step 6: Deploy
Click "Deploy" and wait 2-3 minutes

---

## After Deployment: Domain Setup

### Step 1: Access Project Settings
1. Go to Vercel Dashboard
2. Click on your project
3. Go to "Settings" → "Domains"

### Step 2: Add Custom Domain
1. Click "Add"
2. Enter: `qplldb.com`
3. Click "Add"

### Step 3: Configure DNS
Go to your domain registrar (GoDaddy, Namecheap, etc.) and add:

**For root domain (qplldb.com):**
- Type: A
- Name: @
- Value: 76.76.21.21

**For www subdomain:**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

### Step 4: Wait for Propagation
- DNS changes take 5-48 hours
- Vercel will show "Valid Configuration" when ready

---

## Setting Up Email Service

### Option A: Resend (Easiest)
1. Go to https://resend.com
2. Sign up for free account
3. Get API key
4. In Vercel Dashboard → Settings → Environment Variables:
   ```
   RESEND_API_KEY = re_xxxxxxxxxxxxx
   ```

### Option B: SendGrid
1. Go to https://sendgrid.com
2. Sign up for free account
3. Create API key
4. Add to Vercel:
   ```
   SENDGRID_API_KEY = SG.xxxxxxxxxxxxx
   ```

### Update Contact Form API
After adding email service, update `/src/app/api/contact/route.ts` to use your chosen service.

---

## Testing Your Live Site

### 1. Basic Functionality
- [ ] Homepage loads
- [ ] All navigation links work
- [ ] Mobile menu opens/closes
- [ ] All pages load without errors

### 2. Contact Form
- [ ] Form validates required fields
- [ ] Submit button works
- [ ] Success message appears
- [ ] Email is received

### 3. Responsive Design
- [ ] Test on mobile phone
- [ ] Test on tablet
- [ ] Test on desktop

### 4. Performance
- [ ] Run Lighthouse audit
- [ ] Check loading speed
- [ ] Verify images load

---

## Troubleshooting

### "Command not found: vercel"
Install Vercel CLI globally:
```cmd
npm install -g vercel
```

### Build Errors
Check build logs in Vercel dashboard for specific errors

### Domain Not Working
- Verify DNS records are correct
- Wait up to 48 hours for propagation
- Check Vercel dashboard for domain status

### Contact Form Not Sending
- Verify environment variables are set
- Check API logs in Vercel Functions tab
- Ensure email service API key is valid

---

## Quick Commands Reference

```cmd
# Deploy preview
vercel

# Deploy production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Add environment variable
vercel env add

# Pull environment variables
vercel env pull
```

---

## Support Resources

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Vercel Support: https://vercel.com/support
- Community Discord: https://vercel.com/discord

Your site will be live at your custom domain within 48 hours!