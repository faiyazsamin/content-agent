// This is a simple script to test if your Stripe API key is working
// You can run it locally with: node test-stripe.js

require('dotenv').config();
const Stripe = require('stripe');

async function testStripeConnection() {
  try {
    console.log('Testing Stripe connection...');
    
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY environment variable is not set');
    }
    
    // Only show the first 8 characters of the key for security
    const keyPreview = process.env.STRIPE_SECRET_KEY.substring(0, 8) + '...' +
      process.env.STRIPE_SECRET_KEY.substring(process.env.STRIPE_SECRET_KEY.length - 4);
    console.log(`Using key: ${keyPreview}`);
    
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-04-30.basil'
    });
    
    // Try to fetch something from Stripe to test the connection
    const balance = await stripe.balance.retrieve();
    
    console.log('✅ Stripe connection successful!');
    console.log('Balance available:', balance.available.map(b => `${b.amount / 100} ${b.currency}`).join(', '));
    
  } catch (error) {
    console.error('❌ Stripe connection failed:', error.message);
    console.error('Error type:', error.type);
    
    if (error.message.includes('Invalid API Key')) {
      console.error('\nPossible solutions:');
      console.error('1. Check if your API key format is correct (should start with sk_test_ or sk_live_)');
      console.error('2. Verify your API key is active in Stripe dashboard');
      console.error('3. Make sure you\'re using the correct API key for your environment (test/live)');
    }
  }
}

testStripeConnection();
