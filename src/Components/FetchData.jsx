import React, { useEffect, useState } from 'react'

const FetchData = () => {

    const [product,setProduct] = useState([])

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const api = await fetch("https://itproducts.onrender.com/products")
        if (!api.ok) throw new Error("Oops! An error has occured");
        const data = await api.json()
        setProduct(data)
    }


  return product
}

export default FetchData