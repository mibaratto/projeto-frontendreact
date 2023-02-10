import { CardStyle } from "./ProductCardStyle"
import React from "react"


const ProductCard = ({product, setCart, cart, addProductCart}) => {
     



    return (
        <>
            <CardStyle >
                <img src={product.imageUrl}/>
                <p>{product.name}</p>
                <p>{product.value}</p>
                <button onClick={() => addProductCart(product)}>Add to cart</button>
            </CardStyle>
        </>
    )
}

export default ProductCard