
import { RemoveItemButton } from "./CartStyle"
import CartItems from "../CartItems/CartItems"

const Cart = () => {
    return (
        <>
            <CartItems/>
            <CartItems/>
            <CartItems/>
            <RemoveItemButton>Remove Item </RemoveItemButton>
        </>
    )
}

export default Cart