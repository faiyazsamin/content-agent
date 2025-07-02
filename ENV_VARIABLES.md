# Environment Variables Documentation

This document details all environment variables required for the application to function properly in development and production environments.

## Required Environment Variables

### Database Configuration

```
DATABASE_URL=postgresql://user:password@host.neon.tech/database?sslmode=require
```
- **Description**: Connection string for your NeonDB PostgreSQL database
- **Example**: `postgresql://neondb_owner:password@ep-something-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require`
- **Note**: Must be a valid PostgreSQL connection string. For NeonDB, include SSL parameters.

### Stripe Integration

```
STRIPE_SECRET_KEY=sk_test_51QqWMMCfVKWMehneo4muwKP7LLCbkVCcmmOhdzSdlVNtYq1JTw97xauiMXGz7fUrDbfQygbI7sDQFCcVDoWDRFZA00UTf2uT68
```
- **Description**: Your Stripe secret key for processing payments
- **Example**: `sk_test_51Abcd...` (test mode) or `sk_live_51Abcd...` (production mode)
- **Where to get it**: Stripe Dashboard → Developers → API Keys

```
STRIPE_WEBHOOK_SECRET=whsec_30a1f6a7d199d816ba0174c3d6590c448c1acf4b79afcefa6cd4405a3515f58e
```
- **Description**: Signing secret for Stripe webhook events
- **Example**: `whsec_1234abcd...`
- **Where to get it**: Stripe Dashboard → Developers → Webhooks → Select your webhook → Signing secret
- **Note**: You'll need different webhook secrets for development and production environments

### Application Configuration

```
BASE_URL=https://your-app.vercel.app
```
- **Description**: Base URL of your application
- **Development**: `http://localhost:3000`
- **Production**: Your Vercel deployment URL (e.g., `https://your-app.vercel.app`)
- **Note**: Must include protocol (http:// or https://)

```
AUTH_SECRET=3c56696a1a1351aed94713a40338a9e8ef98e98d308f18fbcbd1b960e2a01526
```
- **Description**: Secret key used for JWT token encryption
- **How to generate**: Run `openssl rand -hex 32` in your terminal
- **Important**: Must be at least 32 characters long and should be kept secret

## Optional Environment Variables

```
NODE_ENV=production
```
- **Description**: Defines the environment the application is running in
- **Values**: `development`, `production`, or `test`
- **Note**: Set automatically by Vercel in production deployments

## Development vs. Production

For your local development environment, these variables should be in your `.env` file:

```properties
DATABASE_URL=postgresql://neondb_owner:password@host.neon.tech/database?sslmode=require
STRIPE_SECRET_KEY=sk_test_51...
STRIPE_WEBHOOK_SECRET=whsec_...
BASE_URL=http://localhost:3000
AUTH_SECRET=your_auth_secret_key
```

For Vercel production deployment, add these same variables in the Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable name and value
4. Select "Production" environment (or all environments)
5. Save

## Security Best Practices

- Never commit your `.env` file to your repository
- Use different values for development and production
- Regularly rotate your AUTH_SECRET
- For Stripe, use test keys during development and live keys in production
