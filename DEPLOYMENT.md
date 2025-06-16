# Netlify Deployment Guide

This guide will help you deploy your pnpm workspace Next.js app to Netlify.

## Prerequisites

- A Netlify account
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Netlify Dashboard (Recommended)

1. **Connect your repository:**
   - Go to [Netlify Dashboard](https://app.netlify.com/)
   - Click "New site from Git"
   - Choose your Git provider and select this repository

2. **Configure build settings:**
   - **Build command:** `pnpm install && pnpm --filter web build`
   - **Publish directory:** `apps/web/.next`
   - **Node version:** `18` (set in Environment variables)

3. **Environment variables:**
   - Add `NODE_VERSION` = `18`
   - Add `PNPM_VERSION` = `8`

4. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically install the Next.js plugin

### Option 2: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Initialize site:**
   ```bash
   netlify init
   ```

4. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

## Configuration Files

The following files have been configured for Netlify deployment:

- `netlify.toml` - Netlify configuration
- `apps/web/next.config.ts` - Next.js configuration optimized for Netlify

## Build Process

The build process will:
1. Install all dependencies using pnpm
2. Build the Next.js application in the `apps/web` directory
3. Deploy the built application to Netlify's CDN

## Troubleshooting

### Common Issues:

1. **Build fails with pnpm not found:**
   - Ensure `PNPM_VERSION` environment variable is set to `8`

2. **Next.js functions not working:**
   - The `@netlify/plugin-nextjs` plugin is automatically installed
   - Check that your API routes are in `apps/web/src/app/api/` directory

3. **Static assets not loading:**
   - Verify the publish directory is set to `apps/web/.next`

### Environment Variables

Add any environment variables your app needs in the Netlify dashboard:
- Go to Site settings > Environment variables
- Add your variables (e.g., API keys, database URLs)

## Custom Domain

To use a custom domain:
1. Go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS settings as instructed by Netlify

## Continuous Deployment

Once connected, Netlify will automatically deploy when you push to your main branch. You can configure this in:
- Site settings > Build & deploy > Continuous deployment 