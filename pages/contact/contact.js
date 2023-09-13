import React from 'react'

const contact = () => {
  return (
    <div>
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">

            <figure className="mt-10">
            <figcaption className="mt-10">
                <img className="mx-auto h-21 w-21 rounded-full" src="/../pictures/logo.jpg" alt=""/> {/** Image */}

                <div className="m-9 flex items-center justify-center space-x-3 text-base"> {/** Contact Name and Position */}
                <div className="font-semibold text-gray-900">Tshwanelo Matlou</div>
                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                    <circle cx="1" cy="1" r="1" />
                </svg>
                <div className="text-gray-600">Store Manger</div>
                </div>

                <blockquote class="text-center leading-8 text-gray-900 sm:text-2xl sm:leading-9"> {/** Contact Details */}
                <p className='m-2'>Cell-Phone1: 065 245 3791</p>
                <p className='m-2'>Cell-Phone2: 067 848 1331</p>
                <p className='m-2'>E-mail tshwanelomatlou55@gmail.com</p>
                </blockquote>

            </figcaption>
            </figure>

        </div>
        </section>
    </div>
  )
}

export default contact
