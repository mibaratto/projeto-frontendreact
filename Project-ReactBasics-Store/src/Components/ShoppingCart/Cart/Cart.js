
import { RemoveItemButton } from "./CartStyle"
import CartItem from "../CartItems/CartItems"

const Cart = ({cart, removeItemCart, amount}) => {



    return (
        <>
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
            {amount.toFixed(2)}
        </>
    )
}
export default Cart