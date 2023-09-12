import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className='border-2'>
      <Link href={`/product/${slug.current}`}>
        <div >

          {/** product Image */}
          <img 
            src={urlFor(image && image[0])}
            className='w-[220px] h-[220px]'
          />

          {/** Product Name */}
          <p className='text-center text-white font-semibold  bg-black p-1'>{name}</p>

          {/** Product Price */}
          <p className='text-center text-white font-semibold bg-black p-1'>R{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product