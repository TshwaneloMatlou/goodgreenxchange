import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-[#0E1D34]'>
      {/* Header container */}
      <div className='container m-4 md:m-8 flex items-center justify-between p-4 md:p-8 text-white'>
        {/* Uncomment the following block if you want to include a logo */}
        {/* <div>
          <img className='w-32 h-32' src='/../pictures/logo.jpg' alt="Logo" />
        </div> */}
      </div>

      {/* Header content */}
      <div className='grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-16 pb-8'>
        {/* Left column */}
        <div>
          <div className='text-white pl-4 md:pl-8'>
            <h1 className='text-3xl md:text-4xl leading-10 md:leading-12 font-bold md:w-3/5 mt-6 md:mt-10 text-green-500'>GoodGreenXchange</h1>
            <p className='text-base md:text-lg leading-6 md:leading-8 font-normal mt-4 md:mt-6 md:w-4/5'>Enjoy Healthy Living</p>
            <p className='text-sm md:text-base leading-6 md:leading-8 mt-4 md:w-4/5'>We provide fruits, vegetables, and health information.</p>
          </div>
        </div>
        
        {/* Right column */}
        <div className='flex items-center justify-center mt-4'>
          <img src='/../pictures/logo.jpg' className='w-4/5 md:w-3/5 mr-4 md:mr-8' alt="Logo" />
        </div>
        <div className='bg-black w-2/5 md:w-1/3 py-3 px-4 md:px-6 rounded-2xl flex items-center mt-6 md:mt-10 mx-4 md:mx-8'>
            <Link href="/store/store" className='text-lg md:text-xl text-white'>Enter Store...</Link>
          </div>
      </div>
    </div>
  );
};

export default Header;
