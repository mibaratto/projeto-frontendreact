import { CardStyle } from "./ProductCardStyle"
import React from "react"


const ProductCard = ({product, addProductCart}) => {
     
    return (
        <>
            <CardStyle >
                <img src={product.imageUrl}/>
                <p>{product.name}</p>
                <p>${product.value.toFixed(2)}</p>
                <button onClick={() => addProductCart(product)}>Add to cart</button>
            </CardStyle>
        </>
    )
}

export default ProductCard