
import CartItem from "../CartItems/CartItems"
import { CartAside } from "./CartStyle"

const Cart = ({cart, removeItemCart, amount}) => {



    return (
        <CartAside>
            <div>{cart.length === 0 && <div>Carrinho está vazio</div> }</div> 
            {cart.map((item) => {
                return (
                    <CartItem 
                    item={item}
                    key={item.id}
                    removeItemCart={removeItemCart}
                    />
                )
            })
            }
            <hr></hr>
            <div>Valor total: {amount.toFixed(2)}</div>
        </CartAside>
    )
}
export default Cart