import { useContext, useState } from "react"
import { Context } from "../AppContext"

import PropTypes from "prop-types"

export default function Image({className, img}){
    const [hovered, setHovered] = useState(false)
    const { toggleFavorite, handleCart, isItemAlreadyExist } = useContext(Context)

    return(
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={img.url}
                className="image-grid"
            />
            {hovered && 
                <>
                    <i 
                        className={`ri-heart-${img.isFavorite ? 'fill' : 'line'} favorite`}
                        onClick={() => toggleFavorite(img.id)}
                    ></i>
                    <i 
                        className={`ri-add-circle-${isItemAlreadyExist(img.id) ? 'fill' : 'line'} cart`}
                        onClick={() => handleCart(img)}
                    ></i>
                </>
            }
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}