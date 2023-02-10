import { CartItemsDiv } from "./CartItemsStyle"
const CartItem = ({item, removeItemCart}) => {

    return (
        <CartItemsDiv>
            <h3>{item.qty}</h3>
            <h3>{item.name}</h3>
            <h3>{item.qty} x </h3>
            <h3>${item.value.toFixed(2)}</h3>
            <button onClick={()=>removeItemCart(item)}>Remove</button>
        </CartItemsDiv>
    )
}

export default CartItem;