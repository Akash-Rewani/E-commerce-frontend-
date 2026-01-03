import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
// import { dummyProducts } from '../assets/data'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL


export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [showUserLogin, setShowUserLogin] = useState('')
    const [cartItems, setCartItems] = useState({})
    const [isAdmin, setIsAdmin] = useState(false)
    const delivery_charges = 10
    const currency = import.meta.env.VITE_CURRENCY


    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/user/is-auth')
            if (data.success) {
                setUser(data.user)
                setCartItems(data.user.cartData)
            } else {
                setUser(null)
                setCartItems({})
            }
        } catch (error) {
            setUser(null)
            setCartItems({})
        }
    }

    const handleLoginSuccess = async () => {
        await fetchUser()
        navigate('/')
    }



    const logoutUser = async () => {
        try {
            const { data } = await axios.post('/user/logout')
            if (data.success) {
                toast.success(data.message)
                setUser(null)
                setCartItems({})
                navigate('/')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // fetch product

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get('/product/list')
            if (data.success) {
                setProducts(data.products)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // admin auth
    const fetchAdmin = async () => {
        try {
            const { data } = await axios.get('/admin/is-auth')
            setIsAdmin(data.success)
        } catch (error) {
            setIsAdmin(false)
        }
    }


    // add to cart
    const addToCart = async (itemId, size) => {
        if (!size) return toast.error("Please Select Size")
        let cartData = structuredClone(cartItems)
        cartData[itemId] = cartData[itemId] || {}
        cartData[itemId][size] = (cartData[itemId][size] || 0) + 1
        setCartItems(cartData)

        if (user) {
            try {
                const { data } = await axios.post('/cart/add', { itemId, size })
                if (data.success) {
                    toast.success(data.message)
                } else {
                    toast.error(data.message)
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
    }

    //get cart count
    const getCartCount = () => {
        let count = 0
        for (const itemId in cartItems) {
            for (const size in cartItems[itemId]) {
                count += cartItems[itemId][size]
            }
        }
        return count
    }
    // get cart update qauntity
    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId][size] = quantity
        setCartItems(cartData)


        if (user) {
            try {
                const { data } = await axios.post('/cart/update', { itemId, size, quantity })
                if (data.success) {
                    toast.success(data.message)
                } else {
                    toast.error(data.message)
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
    }

    // get cart amount
    const getCartAmount = () => {
        let total = 0;
        for (const itemId in cartItems) {
            const product = products.find((p) => p._id === itemId)
            if (!product) continue
            for (const size in cartItems[itemId]) {
                total += product.offerPrice * cartItems[itemId][size]
            }
        }
        return total
    }

    useEffect(() => {
        fetchProducts()
        fetchAdmin()
        fetchUser()
    }, [])

    const value = {
        fetchProducts,
        navigate,
        user,
        setUser,
        products,
        searchQuery,
        setSearchQuery,
        currency,
        showUserLogin,
        setShowUserLogin,
        cartItems,
        setCartItems,
        addToCart,
        getCartAmount,
        getCartCount,
        updateQuantity,
        delivery_charges,
        isAdmin,
        setIsAdmin,
        axios,
        handleLoginSuccess,
        logoutUser,
        fetchUser,



    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>


    )
}

export default ShopContextProvider
