import { HomeHeadStyle, HomeMainStyled } from "./HomeStyle"
import ProductCard from "../ProductCard/ProductCard"
import { HomeProductsListStyled } from "./HomeStyle"
import { useState } from "react"


const Home = ({productList, minFilter, maxFilter, searchFilter, addProductCart}) => {
    const [ordination, setOrdination] = useState("")

    const handleSelectOrdination = (event) => setOrdination(event.target.value )

    const arrayFiltrado = productList
                .filter(product => product.value >= minFilter || minFilter === "")
                .filter(product => product.value <= maxFilter || maxFilter === 0 || maxFilter === "")
                .filter(product => searchFilter === "" || product.name.toLowerCase().includes(searchFilter.toLowerCase()))
                .sort((a,b) => ordination === "" || ordination === "asc" && a.name > b.name ? 1 : -1)
                .sort((a,b) => ordination === "" || ordination === "desc" && a.name > b.name ? -1 : 1)

    return (
        <HomeMainStyled>
            <HomeHeadStyle>
                <p>quantidade:{arrayFiltrado.length}</p>
                <div>
                    <select name="" id="" value={ordination} onChange={handleSelectOrdination}>
                        <option value="">Ordenar</option>
                        <option value="asc">Crescente</option>
                        <option value="desc">Decrescente</option>
                    </select>
                </div>
            </HomeHeadStyle>            
            <HomeProductsListStyled>
                {
                arrayFiltrado.map((product) => {
                    return(
                        <ProductCard
                            key={product.id}
                            product = {product}
                            addProductCart={addProductCart}
                        />   
                    )}
                )}
            </HomeProductsListStyled>

        </HomeMainStyled>
    )
}

export default Home