import React from 'react'
import { TbArrowBackUp } from 'react-icons/tb'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'

const ProductFeatures = () => {
    return (
        <div className='mt-12 bg-white'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 rounded-xl'>
                <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
                    <div className='text-3xl'><TbArrowBackUp className='mb-3 text-yellow-500' /></div>
                    <div>
                        <h4 className='h4 capitalize'>
                            Easy Returns
                        </h4>
                        <p>Enjoy hassle-free returns with our easy and quick return process.
                            If you’re not satisfied, you can return or exchange the product effortlessly
                            within the return period.</p>
                    </div>
                </div>

                <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
                    <div className='text-3xl'><TbTruckDelivery className='mb-3 text-red-500' /></div>
                    <div>
                        <h4 className='h4 capitalize'>
                            Fast Delivery
                        </h4>
                        <p>We offer fast and reliable delivery to ensure your order reaches you on time. With quick processing and secure shipping,
                            you can enjoy a smooth and hassle-free shopping experience.</p>
                    </div>
                </div>

                <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
                    <div className='text-3xl'><RiSecurePaymentLine className='mb-3 text-blue-500' /></div>
                    <div>
                        <h4 className='h4 capitalize'>
                            Secure Payment
                        </h4>
                        <p>Your payments are safe and secure with our trusted and encrypted payment methods. 
                            Shop with confidence knowing your transactions are fully protected.</p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ProductFeatures
