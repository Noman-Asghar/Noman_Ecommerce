import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incremnentQuantity, removeCard } from '../../redux/slices/cardSlice'

const CardPage = () => {
  const {items:cards, totalPrice} = useSelector((state) => state.cards)
  const dispatch = useDispatch()

  return (
    <div className='min-h-screen w-full bg-gray-200 flex justify-center items-center px-4'>
      <div className="w-full max-w-5xl rounded-xl my-10 bg-white shadow-2xl p-5">
        <h1 className='text-3xl py-5 font-bold text-center'>Your Cart</h1>

        {cards.length > 0 ? (
          cards.map((item) => (
            <div
              key={item.id}
              className="border my-3 rounded-lg border-dashed border-red-500 flex flex-col md:flex-row gap-6 md:gap-12 p-4 items-center"
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-40 object-contain"
                />
              </div>

              <div className="flex flex-col md:w-2/3 w-full gap-3 text-center md:text-left">
                <h1 className='text-lg font-bold'>{item.title}</h1>
                <h4 className='font-bold text-red-600 text-xl'>${item.price}</h4>

                <div className="flex gap-4 justify-center md:justify-start items-center">
                  <button onClick={() => dispatch(decrementQuantity(item.id))} className='py-2 px-5 bg-red-600 hover:bg-red-700 duration-200 text-xl rounded-xl font-bold text-white'>
                    -
                  </button>
                  <h5 className='text-xl font-bold'>
                    {item?.quantity || 1}
                  </h5>
                  <button onClick={() => dispatch(incremnentQuantity(item.id))} className='py-2 px-5 bg-green-500 hover:bg-green-600 duration-200 rounded-xl text-xl font-bold text-white'>
                    +
                  </button>
                </div>
              </div>
              <div className="relative md:top-[-50px] md:left-0 left-[40%] top-[0px]" onClick={() => dispatch(removeCard(item.id))}>
                <h1  className='bg-red-600 text-xl  font-bold text-white py-2 px-5 rounded-lg'>X</h1>
              </div>
            </div>
          ))
        ) : (
          <div className="p-5 w-full text-center">
            <h1 className='text-2xl md:text-4xl font-bold text-red-500'>
              Your cart is empty
            </h1>
          </div>
        )}
        <div className="py-2 px-3">
            <h1 className='text-2xl font-bold text-right'>TotalPrice: $<span className='text-red-500'>{totalPrice.toFixed(2)}</span></h1>
        </div>
      </div>
    </div>
  )
}

export default CardPage
