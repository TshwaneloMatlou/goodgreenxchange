import React from 'react';

const OurServices = () => {
  return (
    <div>
      <div className='container mx-auto pt-4 md:pt-8 pb-4 md:pb-12'>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-2xl md:text-4xl font-bold text-[#0E1D34]'>Our Features</h1>
          <div className='h-2 md:h-4 w-20 md:w-40 mt-2 md:mt-4 bg-[#0E1D34]'></div>
        </div>
        
        {/* Features Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 md:mt-12'>
          {/* Feature 1 */}
          <div className='border shadow-lg p-4 md:p-6'>
            <img src="/../pictures/Cart.png" className='h-48 md:h-56 w-full object-cover' alt="Shopping Cart" />
            <h2 className='text-xl md:text-2xl font-semibold pt-4'>Shopping Cart and Checkout:</h2>
            <p className='text-base md:text-lg text-gray-600 pt-2 md:pt-4'>
              The shopping cart and checkout system is a critical feature in e-commerce. It allows users to add products to their cart, review the items they intend to purchase, and proceed to payment. Users can also modify quantities, apply discounts or coupons, and enter shipping and billing information. This feature streamlines the buying process, making it convenient and efficient for customers to complete their purchases.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className='border shadow-lg p-4 md:p-6'>
            <img src="/../pictures/recommandation.png" className='h-48 md:h-56 w-full object-cover' alt="Related Products" />
            <h2 className='text-xl md:text-2xl font-semibold pt-4'>Related Products and Recommendations:</h2>
            <p className='text-base md:text-lg text-gray-600 pt-2 md:pt-4'>
              Related products and recommendations suggest additional items to users based on their browsing and purchase history. These suggestions can appear on product pages, in shopping carts, or during the checkout process. This feature encourages upselling and cross-selling, helping users discover products they may be interested in.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className='border shadow-lg p-4 md:p-6'>
            <img src="/../pictures/rating.png" className='h-48 md:h-56 w-full object-cover' alt="Product Reviews" />
            <h2 className='text-xl md:text-2xl font-semibold pt-4'>Product Reviews and Ratings:</h2>
            <p className='text-base md:text-lg text-gray-600 pt-2 md:pt-4'>
              Product reviews and ratings provide valuable information to shoppers. Customers can read reviews from other buyers to learn about the quality, performance, and satisfaction level of a product. They can also contribute their own reviews and rate products. This feature builds trust, helps users make informed purchase decisions, and fosters a sense of community among customers.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className='border shadow-lg p-4 md:p-6'>
            <video className='h-48 md:h-56 mt-4 md:mt-0' src="/../pictures/goodgreenxchange_3.mp4" autoPlay controls></video>
            <h2 className='text-xl md:text-2xl font-semibold pt-4'>Video of the GoodGreenXchange Store</h2>
            <p className='text-base md:text-lg text-gray-600 pt-2 md:pt-4'>
              {/* You can add a description here if needed. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
