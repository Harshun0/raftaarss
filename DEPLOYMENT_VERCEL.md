# Vercel Deployment Instructions

## Prerequisites
- Vercel account (https://vercel.com)
- Git repository with your project
- Node.js 18+ installed locally

## Deployment Steps

### 1. Install Vercel CLI (Optional)
```bash
npm i -g vercel
```

### 2. Deploy via Vercel CLI
```bash
vercel
```

### 3. Deploy via Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import your Git repository
4. Vercel will automatically detect the framework and build settings
5. Click "Deploy"

## Configuration Details

The project is configured for Vercel deployment with:

- **Build Command**: `npm run build`
- **Output Directory**: `dist/client`
- **Node.js Runtime**: 18.x
- **Framework**: Vite with TanStack Start

## Environment Variables
If you have environment variables, add them in your Vercel project settings:
1. Go to Project Settings → Environment Variables
2. Add your variables with the appropriate values

## Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow the DNS configuration steps

## Build Process
The build process will:
1. Install dependencies with `npm install`
2. Build the application with `npm run build`
3. Deploy the client assets from `dist/client`
4. Deploy the server function from `dist/server.js`

## Troubleshooting

### Build Issues
- Ensure all dependencies are in `package.json`
- Check that the build command works locally: `npm run build`

### Runtime Issues
- Verify Node.js version compatibility
- Check environment variables are properly set
- Review Vercel function logs for errors

### Routing Issues
- The `vercel.json` configuration handles SPA routing
- All routes are rewritten to the server function

## Post-Deployment
After deployment, test your application:
1. Visit the deployed URL
2. Test navigation between routes
3. Verify all functionality works as expected
4. Check browser console for errors

## Continuous Deployment
Vercel automatically deploys on every push to your Git repository. You can:
- Configure preview branches for pull requests
- Set up custom deployment hooks
- Configure build and deployment settings in the dashboard
