// Import the 'loadStripe' function from the '@stripe/stripe-js' package
import { loadStripe } from '@stripe/stripe-js';

// Declare a variable to hold the promise for Stripe initialization
let stripePromise;

// Define a function 'getStripe' for initializing and returning the Stripe instance
const getStripe = () => {
  // Check if the Stripe instance has already been initialized
  if (!stripePromise) {
    // If not initialized, create a promise to load Stripe with your public key
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  // Return the initialized Stripe instance or the existing promise
  return stripePromise;
};

// Export the 'getStripe' function as the default export
export default getStripe;
