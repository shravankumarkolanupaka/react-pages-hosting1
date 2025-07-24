import React from 'react'
import Discount from './Discount'
import Rating from './Rating'

const ProductCard = ({product}) => {
    return (
        <div className='product-card'>
            <img src={product.imgPath} className='product-img' />
            <div className='product-info'>
                <h3>{product.title}</h3>
                <p className='product-price'>{product.offeredPrice}</p>
                <p className='product-original-price'>{product.actualPrice}</p>
                <p className='product-discount'>
                    Discount: <Discount ofp={product.offeredPrice}
                    orp = {product.actualPrice}
                    />
                </p>
                <p className='product-rating'>
                    <Rating rate={product.rating}/>
                </p>
            </div>
        </div>
    )
}

export default ProductCard