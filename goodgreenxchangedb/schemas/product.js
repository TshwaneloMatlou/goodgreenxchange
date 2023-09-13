// Define a schema for a 'product' document
export default {
  name: 'product', // Name of the schema
  title: 'Product', // Title of the schema
  type: 'document', // Type of schema (document)

  // Define fields for the 'product' document
  fields: [
    {
      name: 'image', // Field name for product images
      title: 'Image', // Title of the field
      type: 'array', // Type of the field (array)
      of: [{ type: 'image' }], // Array containing images of type 'image'
      options: {
        hotspot: true, // Enable hotspot for image adjustments
      },
    },
    {
      name: 'name', // Field name for product name
      title: 'Name', // Title of the field
      type: 'string', // Type of the field (string)
    },
    {
      name: 'slug', // Field name for product slug
      title: 'Slug', // Title of the field
      type: 'slug', // Type of the field (slug)
      options: {
        source: 'name', // Source for generating slug (from 'name' field)
        maxLength: 90, // Maximum length of the slug
      },
    },
    {
      name: 'price', // Field name for product price
      title: 'Price', // Title of the field
      type: 'number', // Type of the field (number)
    },
    {
      name: 'details', // Field name for product details
      title: 'Details', // Title of the field
      type: 'string', // Type of the field (string)
    },
  ],
};
