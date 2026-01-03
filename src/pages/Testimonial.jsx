import React from 'react'
import Title from '../components/Title'
import { FaStar } from 'react-icons/fa'
import user1 from '../assets/testimonials/user1.jpg'
import user2 from '../assets/testimonials/user2.jpg'
import user3 from '../assets/testimonials/user3.jpg'

const Testimonial = () => {

    const testimonials = [
        {
            name: "Akash Kumar",
            date: "21 Jan 2025",
            message: "Amazing product quality and very fast delivery. Highly recommended!",
            image: user1,
        },
        {
            name: "Sweta Roy",
            date: "05 Feb 2025",
            message: "Customer support was very helpful and responsive. Great experience overall.",
            image: user2,
        },
        {
            name: "Priya Verma",
            date: "18 Feb 2025",
            message: "The design and finish of the products are top-notch. Loved it!",
            image: user3,
        },
        

    ]


    return (
        <div className='max-padd-container py-16 pt-28 bg-primary'>
            <Title
                title1={"People"}
                title2={"Says"}
                titleStyles={"pb-10"}
                para={'Real stories from happy customers sharing their experience, style inspiration, and trusted feedback on what they love.'} />

            <div className='flex flex-wrap gap-6 pb-12'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='bg-white w-full max-w-[422px] space-y-4 p-3 border-gray-300/60 text-gray-500 text-sm'>
                        <div className='flex justify-between items-center '>
                            <div className='flex gap-1'>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className='text-[#ff532e]' />
                                ))}
                            </div>
                            <p>{testimonial.date}</p>
                        </div>
                        <p>{testimonial.message}</p>
                        <div className='flex items-center gap-2'>
                            <img src={testimonial.image} alt="" className='h-8 w-8 rounded-full' />
                            <p className='font-medium text-gray-800'>{testimonial.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial
