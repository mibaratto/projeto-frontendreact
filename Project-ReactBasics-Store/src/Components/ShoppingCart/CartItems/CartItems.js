import { CartItemsDiv } from "./CartItemsStyle"
const CartItems = ({item}) => {

    return (
        <CartItemsDiv>
            <h3>Quantidade</h3>
            <h3>{item.name}</h3>
            <h3>{item.value}</h3>
        </CartItemsDiv>
    )
}

export default CartItems