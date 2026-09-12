import { useState } from 'react'
import './App.css'
import './styles/global.css'
import Menu from './components/menu/menu'
import MenuAlternativo from './components/menuAlternativo/menuAlternativo'
import BannerStatic from './components/bannerStatic/BannerStatic'
import NewsCards from './components/cards/Cards'
import Carousel from './components/Carousel/Carousel'
import VersiculoRadio from './components/versiculoRadio/versiculoRadio'
import Footer from './components/footer/footer'



function App() {
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

export default App
