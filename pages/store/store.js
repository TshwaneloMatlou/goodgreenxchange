import React from 'react';
import { client } from '../../lib/client';
import { Product, FooterBanner, HeroBanner } from '../../components';

const Store = ({ products, bannerData }) => (
  <div>
    {/* Hero Banner */}
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

    {/* Section for the features */}
    <div className="products-heading">
      <h2 className='text-green-700'>GoodGreenXchange</h2>
      <h5>Enjoy Healthy Living</h5>
    </div>

    {/* Products */}
    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    {/**  Footer Banner 
    <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}

    {/** Recommandation Section */}
    <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData } 
  };
};

export default Store;
