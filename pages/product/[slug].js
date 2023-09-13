import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  // Destructure data from the product object
  const { image, name, details, price } = product;
  
  // State for managing the selected image index
  const [index, setIndex] = useState(0);
  
  // Accessing context for cart functionality
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  // Function to handle immediate purchase
  const handleBuyNow = () => {
    // Add the product to the cart with the selected quantity
    onAdd(product, qty);
    // Show the cart modal
    setShowCart(true);
  }

  return (
    <div>
      <div className="product-detail-container">
        <div>
          {/* Product Images */}
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          {/* Small Images for Thumbnails */}
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          {/* Product Name */}
          <h1 className='m-5 font-extrabold text-center text-[30px]'>{name}</h1>
          <div className="reviews">
            {/* Product Rating */}
            <div className='flex'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            {/* Number of Reviews */}
            <p>(20)</p>
          </div>
          
          <h4 className='font-large'>Product Details:</h4>
          {/* Product Details */}
          <p className='font-semibold'>{details}</p>
          {/* Product Price */}
          <p className="price">R{price}</p>

          {/* Quantity Selection */}
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="flex flex-col-3 gap-10 border-2 border-black bg-gray-200">
              <span className="minus p-2 " onClick={decQty}><AiOutlineMinus /></span>
              <span className="num   p-2 ">{qty}</span>
              <span className="plus  p-2 " onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>

          {/* Add to Cart and Buy Now Buttons */}
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {/* Display related products */}
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Server-side paths generation
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

// Fetch product data based on the slug
export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails;
