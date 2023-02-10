
import { RemoveItemButton } from "./CartStyle"
import CartItems from "../CartItems/CartItems"

const Cart = ({cart, setCart}) => {


    return (
        <>
            {cart.map((item) => {
                return (
                    <CartItems item={item}/>
                )
            })
            }
            {/* <RemoveItemButton>Remove Item </RemoveItemButton> */}
        </>
    )
}
export default Cart