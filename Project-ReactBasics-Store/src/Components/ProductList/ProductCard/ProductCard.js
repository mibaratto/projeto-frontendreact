import { CardStyle } from "./ProductCardStyle"
import React from "react"


const ProductCard = ({name, value, imagem}) => {

    return (
        <>
            <CardStyle >
                <img src={imagem}/>
                <p>{name}</p>
                <p>{value}</p>
            </CardStyle>
        </>
    )
}

export default ProductCard