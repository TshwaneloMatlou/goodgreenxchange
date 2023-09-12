import React from 'react'

import { client } from '../../lib/client';
import { Product, FooterBanner, HeroBanner } from '../../components';

const Store = ({ products, bannerData }) => (
  <div>

    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    {/* Section for the the features*/}
   
    {/** Best Seller Product */}
    <div className="products-heading">
      <h2 className='text-green-700'>...GoodGreenXchange...</h2>
      <h5>Enjoy Health Living</h5>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
    
    <FooterBanner footerBanner={bannerData && bannerData[0]} /> 
    
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData } 
  }
}

export default Store;