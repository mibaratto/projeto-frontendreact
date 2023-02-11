import { CartItemsDiv } from "./CartItemsStyle"
import { FormatItens } from "./CartItemsStyle";

const CartItem = ({item, removeItemCart}) => {

    return (
        <CartItemsDiv>
                <FormatItens>
                    <p>{item.qty}</p><p>{item.name}</p>
                </FormatItens>
                <FormatItens>
                    <p>{item.qty}</p><p>x</p>
                    <p>R${item.value.toFixed(2)}</p>
                </FormatItens>
                <div><button onClick={()=>removeItemCart(item)}>Remove</button></div>
        </CartItemsDiv>
    )
}

export default CartItem;