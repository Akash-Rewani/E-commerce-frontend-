import React, { useContext, useState } from 'react'
import Title from './Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { ShopContext } from '../context/ShopContext'
import { useEffect } from 'react'
import Item from './Item'

const RelatedProducts = ({ product, id }) => {

    const [relatedProducts, setRelatedProducts] = useState([])
    const { products } = useContext(ShopContext)

    useEffect(() => {
        if (product) {
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter((item) => item.category === product.category && id !== item._id)
            setRelatedProducts(productsCopy.slice(0, 6))
        }
    }, [products, product, id])


    return (
        <section className='max-padd-container py-16'>
            <Title
                title1={"Related"}
                title2={"Products"}
                titleStyles={"pb-10"} />

            <Swiper autoplay={{ delay: 4000, disableOnInteraction: false }} breakpoints={{ 555: { slidesPerView: 2, spaceBetween: 10 }, 800: { slidesPerView: 3, spaceBetween: 10 }, 1150: { slidesPerView: 4, spaceBetween: 10 }, 1350: { slidesPerView: 5, spaceBetween: 10 } }} modules={[Autoplay]} className='min-h-[399px]'>

                {relatedProducts.map((product) => (
                    <SwiperSlide key={product._id}>
                        <Item product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default RelatedProducts
