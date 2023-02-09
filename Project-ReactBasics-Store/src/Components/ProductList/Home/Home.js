import { HomeHeadStyle, HomeMainStyled } from "./HomeStyle"
import ProductCard from "../ProductCard/ProductCard"
import { HomeProductsListStyled } from "./HomeStyle"



const Home = ({productList}) => {

    return (
        <HomeMainStyled>
            <HomeHeadStyle>
                <p>quantidade:{productList.length}</p>
                <p>INPUT</p>
            </HomeHeadStyle>            
            <HomeProductsListStyled>
                {productList.map((product) => {
                    return(
                        <ProductCard 
                            name={product.name}
                            value={product.value}
                            imagem={product.imageUrl}
                        />   
                    )}
                )}
            </HomeProductsListStyled>

        </HomeMainStyled>
    )
}

export default Home