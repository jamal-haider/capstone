import { createContext, useEffect, useState } from "react"

const Context = createContext()

// eslint-disable-next-line react/prop-types
function ContextProvider({ children }){
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function isItemAlreadyExist(id){
        return cartItems.some(item => item.id === id)
    }

    // Add item if not exist and remove if exist
    function handleCart(newItem){
        setCartItems(prevCartItems => {
            if(isItemAlreadyExist(newItem.id)){
                return prevCartItems.filter(item => item.id !== newItem.id)
            }
            else
            {
                return [...prevCartItems, newItem]
            }
        })
    }

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
     
        setAllPhotos(updatedArr)
    }

    function emptyCart(){
        setCartItems([])
    }

    return(
        <Context.Provider value={{ allPhotos, toggleFavorite, handleCart, isItemAlreadyExist, cartItems, emptyCart }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}