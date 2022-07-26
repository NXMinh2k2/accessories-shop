import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Slider from 'react-slick'
import { addProduct, deleteProduct } from '../../Redux/ProductSlice'

const FlashCard = ({productItems}) => {

  const dispatch = useDispatch()

  // const handleWithProduct = (productItem) => {
  //   if(reIcon === true) {
  //     dispatch(addProduct(productItem))
  //     setReIcon(false)
  //   } else {
  //     dispatch(deleteProduct(productItem))
  //     setReIcon(true)
  //   }
  // }

  const handleAddCart = (productItem) => {
    dispatch(addProduct(productItem))
  }

  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  const NextArrow = (props) => {
    const {onClick} = props
    return (
      <div className="control-btn" onClick={onClick}>
        <button className='next'>
          <i className='fa fa-long-arrow-alt-right'></i>
        </button>
      </div>
    )
  }

  const PrevArrow = (props) => {
    const {onClick} = props
    return (
      <div className="control-btn" onClick={onClick}>
        <button className='prev'>
          <i className='fa fa-long-arrow-alt-left'></i>
        </button>
      </div>
    )
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  const [reIcon, setReIcon] = useState(true)

  return (
    <>
    <Slider {...settings}>
      {
        productItems.map((productItem) => {
          return (
            <div className="box" key={productItem.id}>
              <div className="product mtop">
                <div className="img">
                  <span className='discount'>{productItem.discount} % Off</span>
                  <img src={productItem.cover} alt="" />
                  <div className='product-like'>
                    <label htmlFor="">0</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{productItem.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>{productItem.price}</h4>
                    <button onClick={() => handleAddCart(productItem)}>
                      {/* {reIcon ? <i className="fa fa-plus"></i> : <i className="fa fa-minus"></i>} */}
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          )
        })
      }
    </Slider>
    </>
  )
}

export default FlashCard