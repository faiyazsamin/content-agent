# Vercel Environment Variables

When deploying to Vercel, you need to set the following environment variables in your project settings.
Here they are in a format you can easily reference:

## Required Variables

```
DATABASE_URL=postgresql://neondb_owner:password@host.neon.tech/database?sslmode=require
```
Database connection string from NeonDB

```
STRIPE_SECRET_KEY=sk_test_51QqWMMCfVKWMehneo4muwKP7LLCbkVCcmmOhdzSdlVNtYq1JTw97xauiMXGz7fUrDbfQygbI7sDQFCcVDoWDRFZA00UTf2uT68
```
Your Stripe secret key for payment processing

```
STRIPE_WEBHOOK_SECRET=whsec_30a1f6a7d199d816ba0174c3d6590c448c1acf4b79afcefa6cd4405a3515f58e
```
Secret for verifying Stripe webhook events

```
BASE_URL=https://your-app.vercel.app
```
Your application's URL (replace with your actual Vercel URL after first deployment)

```
AUTH_SECRET=3c56696a1a1351aed94713a40338a9e8ef98e98d308f18fbcbd1b960e2a01526
```
Secret for JWT authentication (should be at least 32 characters)

## How to Set Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Click on "Settings" tab
4. Navigate to "Environment Variables" section
5. Add each variable (name and value)
6. Select the environments where it should apply (Production, Preview, Development)
7. Click "Save"

## Important Notes

- For production, use your NeonDB connection string with SSL enabled
- For Stripe in production, use your live keys instead of test keys
- After initial deployment, update BASE_URL to your actual Vercel URL
- Never expose your secret keys in client-side code

These variables are sensitive. Never commit them to your repository or share them publicly.
