// Import the 'Stripe' library
import Stripe from 'stripe';

// Create a new instance of 'Stripe' with the Stripe secret key from environment variables
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

// Define an asynchronous request handler function
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Define parameters for creating a Stripe Checkout Session
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1NmtU3JU332ZpCcVxrpPDxhB' }, 
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          // Replace image URL to use the correct source
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/llgp5aa6/production/').replace('-webp', '.webp');

          return {
            price_data: { 
              currency: 'usd',
              product_data: { 
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/success`, // Success URL
        cancel_url: `${req.headers.origin}/canceled`, // Cancel URL
      }

      // Create a Checkout Session using Stripe's API
      const session = await stripe.checkout.sessions.create(params);

      // Respond with the created session
      res.status(200).json(session);
    } catch (err) {
      // Handle errors and respond with an error status and message
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    // Respond with an error if the request method is not allowed
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
