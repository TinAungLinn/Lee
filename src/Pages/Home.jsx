import React from 'react'
import Slider from '../Components/Slider'
import FeatureProducts from '../Components/FeatureProducts'
import Consultation from '../Components/Consultation'
import BestSelling from '../Components/BestSelling'
import Offer from '../Components/Offer'
import Whyme from '../Components/Whyme'
import CopyRight from '../Components/CopyRight'


const Home = () => {
  return (
    <div className=' overflow-hidden'>
      <Slider/>
      <FeatureProducts/>
      <Consultation/>
      <BestSelling/>
      <Offer/>
      <Whyme/>
      <CopyRight/>
    </div>
  )
}

export default Home