import React from 'react'
import { Fastaylinked, FaArrowRight, FaStaylinked} from "react-icons/fa"

const Category = () => {
  return (
    <div className='bg-black text-white mt-3'>
      <div className='container mx-auto grid grid-cols-2 gap-[40px] py-[40px]'>
        <div className='flex gap-[15px] '>
          <FaStaylinked fontSize={40} />
            <div>
                <h1 className='text-[24px] pt-[10px] font-semibold'>Our Inspiration</h1>
                <p className='text-[15px] font-semibold leadiong-[23px] text-gray-600 bg-white p-1'>Driven by a deep Passion for Nutrition and Wellness, I envisioned an e-commerce store that would not only nourish bodies but also souls.</p>
                <p className='text-[15px] font-semibold leadiong-[23px] text-gray-600 bg-white p-1'>My commitment to Community Well-Being fueled the idea, knowing many lacked access to quality groceries and health products.</p> 
                <p className='text-[15px] font-semibold leadiong-[23px] text-gray-600 bg-white p-1'>I aim for more than just sales; I aim for Economic Empowerment too.</p>
                <p className='text-[15px] font-semibold leadiong-[23px] text-gray-600 bg-white p-1'>By sourcing from local farmers and artisans, I aim to uplift my community economically while fostering a culture of well-being.</p>
                <p className='text-[15px] font-semibold leadiong-[23px] text-gray-600 bg-white p-1'>In this venture, I found my purpose, turning inspiration into a thriving store that brought health and empowerment to all.</p>

                <div className='flex items-center gap-[7px] cursor-pointermt-[10px] text[14px] font-semibold bg-white'>
                    <p className='text-gray-700'>Learn More </p> 
                </div>
            </div>
        </div>

        <div className='flex gap-[15px] '>
            <FaStaylinked fontSize={40} />
            <div>
                <h1 className='text-[24px] pt-[10px] font-semibold'>Profile of Creators</h1>
                <p className='text-[15px] font-semibold leadiong-[23px] text-gray-600 bg-white  p-1'>Tshwanelo Matlou</p>
                <p className='text-[15px] font-semibold leadiong-[23px] text-gray-600 bg-white  p-1'>GitHub Profile: https://github.com/TshwaneloMatlou</p>
                <p className='text-[15px] font-semibold leadiong-[23px] text-gray-600 bg-white  p-1'>LinkedIn Profile: https://www.linkedin.com/in/tshwanelomatlou</p>
                <p className='text-[15px] font-semibold leadiong-[23px] text-gray-600 bg-white  p-1'>GitHub Repository: https://github.com/TshwaneloMatlou/GoodGreenXchange</p>
                
                <div className='flex items-center gap-[7px] cursor-pointermt-[10px] text[14px] font-semibold bg-white'>
                    <p className='text-gray-700' >Learn More </p> 
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Category