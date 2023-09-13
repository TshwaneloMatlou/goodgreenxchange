import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="flex flex-col bg-green-100 md:flex-row mt-5 md:mt-8">
      <img src={urlFor(heroBanner.image)} alt="headphones" className="md:w-1/3 md:mr-4" />
      <div className="md:w-2/3">
        {/* Small text */}
        <p className="text-sm md:text-base">{heroBanner.smallText}</p>
        {/* Medium text */}
        <h3 className="text-lg md:text-xl">{heroBanner.midText}</h3>
        {/* Large text */}
        <h1 className="text-2xl md:text-3xl">{heroBanner.largeText1}</h1>

        {/* Link to product */}
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 md:mt-6">
            {heroBanner.buttonText}
          </button>
        </Link>

        {/* Description */}
        <div className="mt-4 md:mt-6">
          <h5 className="text-lg md:text-xl font-semibold">Description</h5>
          <p className="text-sm md:text-base">{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  ) 
}

export default HeroBanner;
