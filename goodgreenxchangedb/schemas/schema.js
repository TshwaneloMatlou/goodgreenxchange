// Import the 'createSchema' function from 'part:@sanity/base/schema-creator'
import createSchema from 'part:@sanity/base/schema-creator';

// Import 'schemaTypes' from 'all:part:@sanity/base/schema-type'
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Import the 'product' and 'banner' schemas
import product from './product';
import banner from './banner';

// Create and export the default schema using 'createSchema'
export default createSchema({
  name: 'default', // Name of the schema (default)
  types: schemaTypes.concat([ product, banner ]), // Concatenate schema types including 'product' and 'banner'
});
