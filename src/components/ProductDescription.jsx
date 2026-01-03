import React from 'react'

const ProductDescription = () => {
    return (
        <div className='mt-14 bg-white'>
            <div className='flex gap-3'>
                <button className='medium-14 p-3 w-32 border-b-2 border-secondary'>Description</button>
                <button className='medium-14 p-3 w-32'>Color Guide</button>
                <button className='medium-14 p-3 w-32'>Size Guide</button>
            </div>
            <hr className='h-[1px] w-full' />
            <div className='flex flex-col gap-3 p-3'>
                <div>
                    <h5 className='h5'>Detail</h5>
                    <p className='text-sm'>
                        Made from high-quality, breathable fabric, this t-shirt offers all-day comfort and a soft feel on the skin. Designed with a modern fit,
                         it provides a perfect balance of style and ease. The durable stitching ensures long-lasting wear, while the versatile '
                         design makes it suitable for casual outings or everyday use. An essential wardrobe staple that pairs effortlessly with any outfit.
                    </p>
                    <p>
                        Made from high-quality, breathable fabric, this t-shirt offers
                    </p>
                </div>
                <div>
                    <h5 className='h5'>Benifit</h5>
                    <ul className='list-disc pl-5 text-sm text-gray-30 flex flex-col gap-1'>
                        <li>All-day comfort: Soft, breathable fabric keeps you comfortable throughout the day</li>
                        <li>Versatile style: Easy to pair with jeans, joggers, or shorts for any occasion.</li>
                        <li>Long-lasting quality: Durable stitching and premium material ensure extended wear</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription
