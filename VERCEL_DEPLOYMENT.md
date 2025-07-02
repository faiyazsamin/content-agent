# Deploying to Vercel

This guide will help you deploy your Next.js application with NeonDB integration to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (you can sign up with GitHub, GitLab, or email)
2. Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)
3. A NeonDB database (which you've already set up)

## Deployment Steps

### 1. Log in to Vercel

Go to [Vercel](https://vercel.com/) and log in to your account.

### 2. Import Your Repository

1. Click on "Add New..." → "Project"
2. Connect your Git provider if you haven't already
3. Select your repository from the list
4. Click "Import"

### 3. Configure Project

On the "Configure Project" screen:

1. **Project Name**: Keep the default or choose a custom name
2. **Framework Preset**: Next.js (should be automatically selected)
3. **Root Directory**: Leave blank if your project is in the root of the repository

### 4. Environment Variables

Add the following environment variables from your `.env` file:

- `DATABASE_URL`: Your NeonDB connection string
- `STRIPE_SECRET_KEY`: Your Stripe secret key
- `STRIPE_WEBHOOK_SECRET`: Your Stripe webhook secret
- `BASE_URL`: Set this to your Vercel deployment URL (you can update this after the first deployment)
- `AUTH_SECRET`: Your authentication secret

**Important**: For `BASE_URL`, you might want to use a placeholder for the first deployment and then update it later with your actual Vercel URL.

### 5. Deploy

Click on "Deploy" and wait for the deployment to complete.

### 6. Update BASE_URL (if needed)

After the first deployment:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Update `BASE_URL` with your actual Vercel URL (e.g., `https://your-project.vercel.app`)
4. Click "Save"

### 7. Set up Stripe Webhook for Production (Optional)

If you're using Stripe in production:

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/webhooks)
2. Create a new webhook endpoint pointing to your Vercel URL: `https://your-project.vercel.app/api/stripe/webhook`
3. Select the necessary events (checkout.session.completed, etc.)
4. Get the new webhook signing secret
5. Update the `STRIPE_WEBHOOK_SECRET` in your Vercel environment variables

## Continuous Deployment

Vercel automatically deploys your application when you push changes to your repository. Your application should now be live at `https://your-project.vercel.app`!

## Troubleshooting

If you encounter any issues during deployment:

1. Check the Vercel deployment logs
2. Ensure all environment variables are correctly set
3. Verify that your NeonDB connection string is correct and the database is accessible from Vercel
4. Make sure your Next.js application builds successfully locally with `npm run build`
