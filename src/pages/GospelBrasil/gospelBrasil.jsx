import Menu from '../../components/menu/menu'
import Footer from '../../components/footer/footer'

import './styleGospelBrasil.css';


function GospelBrasil() {

    return (
        <main className="brasil-gospel-section">
            <Menu />
            <div className='carousel-track'>

            <img src="imagens/mulher-lendo-jornal.jpg" className='carousel-slide' alt="" srcset="" />
            </div>
            <div className='container-gospel-brasil'>
                <div className='artigo-gospel-brasil'>
                    <img src="imagens/mulher-jovem-musica.jpg" className='img-noticia-card' alt="" />
                    <div className='texto-artigo-brasil'>
                        <h1> Fenômenos Digitais e Marcas Históricas</h1>
                        <p>
                            A música gospel vive um momento de alcance estrondoso nas plataformas de streaming. Gabriela Rocha alcançou a impressionante marca de 10 milhões de inscritos em seu canal oficial do YouTube, consolidando-se como um dos maiores perfis de música cristã do mundo. Paralelamente, ícones tradicionais como Cassiane continuam quebrando barreiras de mercado, figurando em rankings históricos de grandes vendas físicas e digitais.
                        </p>
                    </div>
                </div>
                <div className='artigo-gospel-brasil'>
                    <img src="imagens/jovem-pregando.jpg" className='img-noticia-card' alt="" />
                    <div className='texto-artigo-brasil'>
                        <h1>A Nova Geração no Comando</h1>
                        <p>
                            A evangelização mudou de formato. Se antes o foco eram apenas os grandes templos, hoje os influenciadores e jovens pregadores dominam o TikTok e o Instagram. Vídeos de estudantes compartilhando mensagens de fé nos pátios das escolas e criadores usando o humor para falar de rotina cristã alcançam milhões de visualizações semanalmente, gerando debates intensos sobre os limites da exposição e o bom senso na internet.
                        </p>
                    </div>
                </div>
                <div className='artigo-gospel-brasil'>
                    <img src="imagens/jovem-no-computador.jpg" className='img-noticia-card' alt="" />
                    <div className='texto-artigo-brasil'>
                        <h1>Conexão Global e Solidariedade</h1>
                        <p>
                            O interesse por notícias internacionais cresceu vertiginosamente entre os leitores de blogs evangélicos. O público tem acompanhado de perto relatórios de missões globais e movimentos de oração internacional pela paz no Oriente Médio, além de grandes campanhas sociais que distribuem milhões de livros e mantêm projetos de apoio em pequenas comunidades.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );


};


export default GospelBrasil;