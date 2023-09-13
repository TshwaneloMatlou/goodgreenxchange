import React from 'react';
import { FaStaylinked } from "react-icons/fa";

const Category = () => {
  return (
    <div className='text-black mt-3'>
      {/* Container for responsive layout */}
      <div className='container mx-auto grid md:grid-cols-2 gap-6 py-6 md:py-12 lg:py-16'>

        {/* First Column */}
        <div className='flex flex-col gap-4 md:gap-6'>
          <FaStaylinked fontSize={40} />
          <div>
            {/* Heading */}
            <h1 className='text-xl md:text-2xl font-semibold'>Our Inspiration</h1>
            {/* Description */}
            <p className='text-base md:text-lg text-gray-600 bg-white p-2'>
              Driven by a deep passion for nutrition and wellness, I envisioned an e-commerce store that would not only nourish bodies but also souls. <br />
              My commitment to Community Well-Being fueled the idea, knowing many lacked access to quality groceries and health products. <br />
              I aim for more than just sales; I aim for Economic Empowerment too. <br />
              By sourcing from local farmers and artisans, I aim to uplift my community economically while fostering a culture of well-being. <br />
              In this venture, I found my purpose, turning inspiration into a thriving store that brought health and empowerment to all.
            </p>
            {/* "Learn More" button */}
            <div className='flex items-center gap-2 cursor-pointer mt-4 text-sm md:text-base font-semibold bg-white p-2'>
              <p className='text-gray-700'>Learn More</p>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className='flex flex-col gap-4 md:gap-6'>
          <FaStaylinked fontSize={40} />
          <div>
            {/* Heading */}
            <h1 className='text-xl md:text-2xl font-semibold'>Profile of Creators</h1>
            {/* Creator information */}
            <p className='text-base md:text-lg text-gray-600 bg-white p-2'>Tshwanelo Matlou</p>
            <p className='text-base md:text-lg text-gray-600 bg-white p-2'>
              GitHub Profile: <a href="https://github.com/TshwaneloMatlou" className="text-blue-500" target="_blank" rel="noopener noreferrer">https://github.com/TshwaneloMatlou</a> <br />
              LinkedIn Profile: <a href="https://www.linkedin.com/in/tshwanelomatlou" className="text-blue-500" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/tshwanelomatlou</a> <br />
              GitHub Profile: <a href="https://github.com/TshwaneloMatlou/GoodGreenXchange" className="text-blue-500" target="_blank" rel="noopener noreferrer">https://github.com/TshwaneloMatlou/GoodGreenXchange</a>

            </p>
            {/* "Learn More" button */}
            <div className='flex items-center gap-2 cursor-pointer mt-4 text-sm md:text-base font-semibold bg-white p-2'>
              <p className='text-gray-700'>Learn More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
