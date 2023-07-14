import { useContext, useState } from "react"
import { Context } from "../AppContext"
import PropTypes from "prop-types"

export default function CartItem({item}){
    const { handleCart } = useContext(Context)
    const [hovered, setHovered] = useState(false)
    return(
      <div className="cart-item">
        <i
          className={`ri-delete-bin-${hovered ? 'fill' : 'line'}`}
          onClick={() => handleCart(item)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
        </i>
        <img src={item.url} width="130px" />
        <p>$5.99</p>
      </div>
    )
    
}


CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}