// Import the necessary dependencies from the 'sanity' package
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create a Sanity client with configuration options
export const client = sanityClient({
  projectId: 'llgp5aa6',                  // Replace with your project ID
  dataset: 'production',                // Replace with your dataset name
  apiVersion: '2023-08-29',            // Specify the API version
  useCdn: true,                         // Enable Content Delivery Network (CDN)
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN  // Use a public environment variable for the token
});

// Create an instance of the imageUrlBuilder using the Sanity client
const builder = imageUrlBuilder(client);

// Define a utility function 'urlFor' to generate image URLs
export const urlFor = (source) => builder.image(source);
