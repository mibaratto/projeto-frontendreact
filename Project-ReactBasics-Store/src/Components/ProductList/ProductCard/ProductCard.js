import { CardStyle } from "./ProductCardStyle"
import React from "react"
import { FormatProductText } from "./ProductCardStyle"


const ProductCard = ({product, addProductCart}) => {
     
    return (
        <>
            <CardStyle >
                <img src={product.imageUrl}/>   
                <FormatProductText>
                    <p>{product.name}</p>
                    <p>${product.value.toFixed(2)}</p>
                    <button onClick={() => addProductCart(product)}>Add to cart</button>
                </FormatProductText>
            </CardStyle>
        </>
    )
}

export default ProductCard