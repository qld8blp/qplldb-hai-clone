# HAI Website Clone - Deployment Guide

## 🚀 Deployment to Vercel

Since we're experiencing WSL bus errors, here are two options for deployment:

### Option 1: Deploy from Windows Command Prompt or PowerShell

1. Open Windows Command Prompt or PowerShell (not WSL)
2. Navigate to the project directory:
   ```cmd
   cd C:\Users\dusti\HAI\qplldb-hai-clone
   ```

3. Login to Vercel:
   ```cmd
   vercel login
   ```
   - Choose your preferred login method (GitHub recommended)
   - Follow the authentication flow

4. Deploy to production:
   ```cmd
   vercel --prod
   ```
   - Accept the default settings or configure as needed
   - Wait for deployment to complete

### Option 2: Deploy via GitHub + Vercel Integration

1. Push the code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial HAI website clone"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Connect your GitHub account
5. Select the repository
6. Deploy with default Next.js settings

## 🌐 Domain Configuration (qplldb.com)

After deployment:

1. In Vercel Dashboard:
   - Go to your project settings
   - Navigate to "Domains"
   - Add "qplldb.com"

2. Update DNS records at your domain registrar:
   - Add A record: @ → 76.76.21.21
   - Add CNAME record: www → cname.vercel-dns.com

## 📧 Contact Form Setup

For the contact form to work, add these environment variables in Vercel:

1. Go to Project Settings → Environment Variables
2. Add email service credentials (e.g., SendGrid, Mailgun, or Resend):
   ```
   EMAIL_API_KEY=your_api_key
   EMAIL_FROM=noreply@qplldb.com
   EMAIL_TO=info@qplldb.com
   ```

3. Create API route `/app/api/contact/route.ts` for form handling

## 📊 Google Analytics

1. Get your Google Analytics Measurement ID (G-XXXXXXXXXX)
2. Add to environment variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. The analytics script is already prepared in the layout

## 🔍 Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test navigation and mobile menu
- [ ] Submit contact form test
- [ ] Check responsive design on mobile devices
- [ ] Validate all links work
- [ ] Run Lighthouse audit
- [ ] Set up monitoring/alerts

## 🛠️ Troubleshooting

If deployment fails:
1. Check Node.js version compatibility (18.x recommended)
2. Ensure all dependencies are listed in package.json
3. Check for any hardcoded localhost URLs
4. Verify environment variables are set

## 📱 Quick Links

- Vercel Dashboard: https://vercel.com/dashboard
- Domain DNS Guide: https://vercel.com/docs/custom-domains
- Environment Variables: https://vercel.com/docs/environment-variables

The website is production-ready and optimized for deployment!