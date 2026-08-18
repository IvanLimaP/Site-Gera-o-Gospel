import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { motion } from "framer-motion";


const paginas = [
  {
    id: 1,
    title: "Pagina Inicial",
    image: "/imagens/paginaInicial.png",
    route: "/",
  },
  {
    id: 2,
    title: "Musica Gospel",
    image: "/imagens/musicaGospel.png",
    route: "/MusicaGospel",
  },
  {
    id: 3,
    title: "Palavra Gospel",
    image: "/imagens/palavraGospel.png",
    route: "/PalavralGospel",
  },
  {
    id: 4,
    title: "Brasil Gospel",
    image: "/imagens/gospelBrasil.png",
    route: "/BrasilGospel",
  },
  {
    id: 5,
    title: "Carmo Gospel",
    image: "/imagens/gospelCarmo.png",
    route: "/CarmoGospel",
  },


];

export default function PaginasCard() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <section className="">
      <div className="menu">
          <img src="./logoSite.png" className='logoSiteMenu' alt="" />
        {paginas.map((pagina) => (
          
          <motion.div
            key={pagina.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            
            <Link
              to={pagina.route}
              className="linkPaginasCard textPaginasCard"
            >
              <img
                src={pagina.image}
                alt={pagina.title}
                className="imgPaginasCard"
              />

              <div className="">
                <h3 className="subTitleH3">
                  {pagina.title}
                </h3>

              </div>
            </Link>
          </motion.div>
        ))}
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>

    </section>
  );
}