import { useContext, useState } from "react"
import { Context } from "../AppContext"
import CartItem from "../components/CartItem"


export default function Cart(){
    const [buttonText, setButtonText] = useState("Place Order")
    const { cartItems, emptyCart } = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder(){
        setButtonText("Ordering...")
        setTimeout(() => {
            setButtonText("Place Order")
            emptyCart()
            console.log("Order Placed!")
        }, 3000);
    }

    return(
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            
                {cartItems.length > 0 ?
                    <div className="order-button">
                        <button onClick={placeOrder}>{buttonText}</button>
                    </div>
                :
                    <p>You have no items in your cart</p>
                }
        </main>
    )
} 