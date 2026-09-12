import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import "./footerStyle.css"

const redeSociais = [
    {
        id: 1,
        title: "Facebook",
        image: "/imagens/facebook.png",
        route: "/",
    },
    {
        id: 2,
        title: "Instagram",
        image: "/imagens/instagram.png",
        route: "/",
    },
    {
        id: 3,
        title: "Linkedin",
        image: "/imagens/linkedin.png",
        route: "/",
    }
];

export default function Footer() {
    return (
        <section className='footerSection'>
            <div className='footerDivPrincipal'>
                {redeSociais.map((redeSocial) => (

                    <Link
                        to={redeSocial.route}
                        className="link-rede-social"
                    >
                        <img
                            src={redeSocial.image}
                            alt={redeSocial.title}
                            className="imgPaginasCard"
                        />

                        <div className="">
                            <h3 className="title-rede-social">
                                {redeSocial.title}
                            </h3>

                        </div>
                    </Link>

                ))}
            </div>
            <h5 className='texto-copyright'>Copyright © 2026 Portifolio Site Geração Gospel — Desenvolvido por Ivan Lima</h5>
        </section>
    )


}