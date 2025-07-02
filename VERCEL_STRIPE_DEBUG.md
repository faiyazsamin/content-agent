# Fixing Stripe Authentication Error in Vercel

You're seeing this error because there's an issue with your Stripe API key in the Vercel environment:

```
Error: Invalid API Key provided: Required****************************************...)
```

## Fixing Steps

### 1. Check Your Stripe API Key Format

First, make sure you have the correct Stripe API key:

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Copy your **Secret key** (starts with `sk_test_` for test mode or `sk_live_` for live mode)
3. Make sure the key is current and active

### 2. Update Vercel Environment Variables

1. Go to your [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Navigate to **Settings** > **Environment Variables**
4. Check if the `STRIPE_SECRET_KEY` variable exists
5. If it exists, edit it. If not, create a new variable:
   - Name: `STRIPE_SECRET_KEY`
   - Value: Paste your Stripe secret key
   - Environment: Select Production (or all environments)
6. Click **Save**

### 3. Redeploy Your Application

1. Go to the **Deployments** tab
2. Find your latest deployment
3. Click the **...** (three dots) menu
4. Select **Redeploy**

### 4. Verify Other Environment Variables

Make sure these other required variables are also properly set:
- `DATABASE_URL`
- `STRIPE_WEBHOOK_SECRET`
- `BASE_URL`
- `AUTH_SECRET`

### 5. Check Vercel Logs

If the issue persists:

1. Go to the **Deployments** tab
2. Click on your most recent deployment
3. Select the **Functions** tab
4. Look for functions related to Stripe (like API routes that call Stripe)
5. Check the logs for more specific error information

## Common Issues

1. **Incorrect Key Format**: Make sure there are no extra spaces or characters in your API key
2. **Using Test Key in Production**: Make sure you're using the correct key for your environment
3. **Expired or Revoked Key**: Generate a new key in Stripe if necessary
4. **Typos in Environment Variable Name**: Ensure it's exactly `STRIPE_SECRET_KEY`
