import React, { createContext, useState } from 'react'

const WishlistContext = createContext()

export default function WishlistProvider({children}) {
     
    const[wishlist, setWishlist] = useState([])

    function addtoWishlist(item){
        let itemIndex = wishlist.filter((x)=>x.id === item._id)
        if(!itemIndex){
           let newWishlist = [...wishlist]
           setWishlist([...wishlist], newWishlist)
        }
        else{
            setWishlist([...wishlist])
        }
    }


  return (
    <WishlistContext.Provider value={{wishlist, setWishlist, addtoWishlist}}>{children}</WishlistContext.Provider>
  )
}
