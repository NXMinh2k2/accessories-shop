import React from 'react'
import TopCate from '../components/top/TopCate'
import Discount from '../components/discount/Discount'
import FlashDeals from '../components/flashDetails/FlashDeals'
import Home from '../components/mainpage/Home'
import NewArrivals from '../components/newArrivals/NewArrivals'
import Shop from '../components/shops/Shop'
import Annocument from '../components/annocument/Annocument'
import Wrapper from '../components/wrapper/Wrapper'

const Pages = ({productItems}) => {
  return (
    <>
        <Home/>
        <FlashDeals productItems={productItems}/>
        <TopCate />
        <NewArrivals />
        <Discount />
        <Annocument />
        <Wrapper />
        {/* <Shop /> */}
    </>
  )
}

export default Pages