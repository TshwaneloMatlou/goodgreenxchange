import React from 'react'
import Link from 'next/link'
 

const Header = () => {
  return (
    <div className='bg-[#0E1D34]'>
        <div className='container m-[20px] flex items-center justify-between p-[20px] text-white'>
        {/* <div>
            <img className='w-[150px] h-[150]' src='/../pictures/logo.jpg' alt="" />
            </div> */ }
        </div>

        <div className='grid grid-cols-2 mt-[40px] pb-[40px] '>
            <div>
                <div className='text-white pl-[25px]'>
                    <h1 className='text-[48px] leading-[58px] w-[60%] font-bold mt-[50px] text-[green] '>GoodGreenXchange</h1> 
                    <p className='text-[15px] leading-[23px] font-normal mt-[30px] w-[80%]'>Enjoy Health Living </p>
                    <p>We Provide fruits and vegetables and health informations.</p>
                </div>
                <div className='bg-black w-[30%] py-[15px] mx-[25px] px-[15px] rounded-[6px] flex items-center mt-[30px]  '>
                        <Link className='text-[20px] text-white' href="/store/store">Enter Store...</Link>

                </div>

            </div>
            <div className='flex items-center justify-end'>
                <img src='/../pictures/logo.jpg' className='z-10 w-[87%] mr-[50px]' alt="" />
            </div>

        </div>

        
    </div>
  )
}

export default Header