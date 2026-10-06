import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'

import Menu from '../../components/menu/menu'
import NewsCards from '../../components/cards/Cards'
import Carousel from '../../components/Carousel/Carousel'
import VersiculoRadio from '../../components/versiculoRadio/versiculoRadio'
import Footer from '../../components/footer/footer'





function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <Carousel />
      <NewsCards />
      <VersiculoRadio />
      <Footer />
    </>
    
  )
}

export default Home
