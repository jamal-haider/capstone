import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../AppContext";


export default  function Layout(){
    const { cartItems } = useContext(Context)
    return(
        <>
            <header>
                <Link to="/"><h2>Pic Some</h2></Link>
                <Link to="/cart">
                    <i className={`ri-shopping-cart-${cartItems.length > 0 ? 'fill' : 'line'} ri-fw ri-2x`}></i>
                </Link>
            </header>
            <Outlet />
        </>
    )
}