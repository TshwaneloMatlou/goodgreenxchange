import React from 'react'

const OurServices = () => {
  return (
    <div>
      <div className='container mx-auto pt-[20px] pb-[20px]  '>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-[32px] font-bold text-[#0E1D34]'>Our Features</h1>
                <div className='h-[4px] w-[40px] mt-[8px] bg-[#0E1D34]'></div>
            </div>
            <div className='grid grid-cols-4 gap-[30px] mt-[50px]'>
                <div className='border shadow-lg p-[5px] '>
                    <img src="/../pictures/Cart.png" className='h-[350px] w-full object-cover' alt="" />
                    <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>Shopping Cart and Checkout:</h2>
                    <p className='text-[15px] text-gray-600 pl-[15px] pb-[10px]'> 
                      The shopping cart and checkout system is a critical feature in e-commerce. 
                      It allows users to add products to their cart, review the items they intend to purchase, and proceed to payment. 
                      Users can also modify quantities, apply discounts or coupons, and enter shipping and billing information. 
                      This feature streamlines the buying process, making it convenient and efficient for customers to complete their purchases. 
                    </p>
                </div>

                <div className='border shadow-lg p-[5px] '>
                    <img src="/../pictures/recommandation.png" className='h-[350px] w-full object-cover' alt="" />
                    <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>Related Products and Recommendations:</h2>
                    <p className='text-[15px] text-gray-600 pl-[15px] pb-[10px]'>
                      Related products and recommendations suggest additional items to users based on their browsing and purchase history. 
                      These suggestions can appear on product pages, in shopping carts, or during the checkout process. 
                      This feature encourages upselling and cross-selling, helping users discover products they may be interested in. 
                    </p>
                </div>

                <div className='border shadow-lg p-[5px] '>
                    <img src="/../pictures/rating.png" className='h-[350px] w-full object-cover' alt="" />
                    <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>Product Reviews and Ratings:</h2>
                    <p className='text-[15px] text-gray-600 pl-[15px] pb-[10px]'>
                      Product reviews and ratings provide valuable information to shoppers. 
                      Customers can read reviews from other buyers to learn about the quality, performance, and satisfaction level of a product.
                      They can also contribute their own reviews and rate products. 
                      This feature builds trust, helps users make informed purchase decisions, and fosters a sense of community among customers. 
                    </p>
                </div>

                <div className='border shadow-lg p-[5px] '>
                    <video className='mt-[180px]' src="/../pictures/goodgreenxchange_3.mp4" autoPlay controls></video>
                    <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>Video of the GoodGreenXchange store</h2>
                    <p className='text-[15px] text-gray-600 pl-[15px] pb-[10px]'>
                    </p>
                </div>

            </div>
      </div>
    </div>
  )
}

export default OurServices