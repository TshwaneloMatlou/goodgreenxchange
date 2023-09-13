// Define a schema for a 'banner' document
export default {
    name: 'banner', // Name of the schema
    title: 'Banner', // Title of the schema
    type: 'document', // Type of schema (document)
  
    // Define fields for the 'banner' document
    fields: [
      {
        name: 'image', // Field name for the banner image
        title: 'Image', // Title of the field
        type: 'image', // Type of the field (image)
        options: {
          hotspot: true, // Enable hotspot for image adjustments
        },
      },
      {
        name: 'buttonText', // Field name for the button text
        title: 'ButtonText', // Title of the field
        type: 'string', // Type of the field (string)
      },
      {
        name: 'product', // Field name for the product reference
        title: 'Product', // Title of the field
        type: 'string', // Type of the field (string)
      },
      {
        name: 'desc', // Field name for the description
        title: 'Desc', // Title of the field
        type: 'string', // Type of the field (string)
      },
      {
        name: 'smallText', // Field name for small text
        title: 'SmallText', // Title of the field
        type: 'string', // Type of the field (string)
      },
      {
        name: 'midText', // Field name for mid-sized text
        title: 'MidText', // Title of the field
        type: 'string', // Type of the field (string)
      },
      {
        name: 'largeText1', // Field name for large text (1st line)
        title: 'LargeText1', // Title of the field
        type: 'string', // Type of the field (string)
      },
      {
        name: 'largeText2', // Field name for large text (2nd line)
        title: 'LargeText2', // Title of the field
        type: 'string', // Type of the field (string)
      },
      {
        name: 'discount', // Field name for discount information
        title: 'Discount', // Title of the field
        type: 'string', // Type of the field (string)
      },
      {
        name: 'saleTime', // Field name for sale time information
        title: 'SaleTime', // Title of the field
        type: 'string', // Type of the field (string)
      },
    ],
  };
  