import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { motion } from "framer-motion";
import "./menuStyle.css"


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

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="">
      <button className="hamburguer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        <motion.span
          animate={{
            rotate: menuOpen ? 45 : 0,
            Y: menuOpen ? 8 : 0
          }}
        />

        <motion.span
          animate={{
            opacity: menuOpen ? 0 : 1
          }}
        />

        <motion.span
          animate={{
            rotate: menuOpen ? -45 : 0,
            y: menuOpen ? -8 : 0
          }}
        />

      </button>

      <div className={`menu ${menuOpen ? "menu-open" : ""}`}>

        <img
          src="./logoSite.png"
          className='logoSiteMenu'
          alt="" />

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