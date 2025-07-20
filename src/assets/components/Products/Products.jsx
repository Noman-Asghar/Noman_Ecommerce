import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchedProducts } from '../../redux/slices/prouductSlice'
import { addToCard } from '../../redux/slices/cardSlice'

const Products = () => {


    const {products, isLoading, isError} = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
     dispatch(fetchedProducts())
    },[dispatch])

    if (isLoading) {
       <div className='text-5xl p-56 text-white'>Loading...</div>
    }
  return (
    <>
       <h1 className="text-4xl font-bold  text-center py-6 shadow">
        Product List
      </h1>

      <div className="min-h-screen bg-gray-300 px-4 py-10">
        <div className="flex flex-wrap justify-center gap-6">
          {products?.map((product) => (
            <div to={`/products/${product.id}`}
              key={product.id}
              className="bg-white text-black rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col p-4 w-full sm:w-[45%] md:w-[30%] lg:w-[22%] min-h-[550px]"
            >
              <Link to={`/products/${product.id}`} className="h-64 w-full flex items-center justify-center bg-gray-100 mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </Link>
              <h2 className="text-lg font-bold mb-2">{product.title}</h2>
              <p className="text-sm text-gray-700 mb-3 overflow-hidden line-clamp-3">
                {product.description}
              </p>
              <p className="text-xl font-bold text-red-600 mb-4">${product.price}</p>
              <div className="flex justify-between mt-auto">
                <button className="bg-blue-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-800">
                  Buy Now
                </button>
                <button onClick={() => dispatch(addToCard(product))} className="bg-amber-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-amber-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products
