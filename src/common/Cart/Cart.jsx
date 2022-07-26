import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, decreaseQuantity, deleteProduct } from '../../Redux/ProductSlice'
import './style.css'

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product.productList)
  console.log(products)

  const increaseProduct = (item) => {
    dispatch(addProduct(item))
  }

  const removeProduct = (item) => {
    dispatch(deleteProduct(item))
  }

  const decreaseProduct = (item) => {
    dispatch(decreaseQuantity(item))
  }

  const totalPriceOfCart =  products.reduce((price, item) => price + item.totalPrice, 0)

  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          <div className='cart-details'>
            {products.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}
          
            {products.map(item => {
              return (
                <div className='cart-list product d_flex'>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>${item.price}.00 x {item.quantity}
                      <span>{item.totalPrice}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button onClick={() => removeProduct(item)}>
                        <i className='fa fa-xmark'></i>
                      </button>
                    </div>

                    <div className="cartControl d_flex">
                      <button className='inCart' onClick={() => increaseProduct(item)}>
                        <i className="fa fa-plus"></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseProduct(item)}>
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className='d_flex'>
              <h4>Total Price: </h4>
              <h3>${totalPriceOfCart}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart