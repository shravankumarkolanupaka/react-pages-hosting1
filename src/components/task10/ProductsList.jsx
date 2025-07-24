import React, { useState } from 'react'
import './products.css'
import ProductCard from './ProductCard'
const ProductsList = () => {
    const [products, setProducts] = useState([
        {
            title: "Tecno Pova 7 5G (Oasis Green, 128 GB)  (8 GB RAM)",
            imgPath: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/v/v/-original-imahe8nfmrhvqx6a.jpeg?q=70",
            actualPrice: "₹18,999",
            offeredPrice: "₹14,999",
            rating: "4.5"
        }, {
            title: "POCO C75 5G (Enchanted Green, 64 GB)  (4 GB RAM)",
            imgPath: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/v/f/-original-imahbr2cmpwexghw.jpeg?q=70",
            actualPrice: "₹10,999",
            offeredPrice: "₹7,699",
            rating: "4.3"
        }
    ])
    return (
        <div className='product-container'>
            {
                products.map((product, index) => {
                    return <ProductCard product={product} key={index}/>
                })
            }
        </div>
    )
}
export default ProductsList