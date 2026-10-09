import Menu from '../../components/menu/menu'
import VersiculoRadio from '../../components/versiculoRadio/versiculoRadio'
import Footer from '../../components/footer/footer'

import './stylePalavra.css';


function PagePalavraGospel() {

    return (
        <main className="palavra-section">
            <Menu />
            <div className='container-palavra'>
                <div className='container-artigo'>
                    <div className='texto-artigo'>
                        <h1> Fé e Adoração nas Plataformas Digitais </h1>
                        <p>
                            O crescimento do mercado gospel reflete uma tendência nacional marcante: o gênero já ultrapassou as barreiras dos templos religiosos e alcança milhões de ouvintes diariamente nos serviços de streaming. Canções como as de Isadora Pompeo, Julliany Souza e Gabriela Rocha continuam liderando playlists de adoração devido às suas mensagens de esperança, fé e profunda entrega espiritual.
                            A nova música de trabalho de Isadora reforça sua marca de compor letras intimistas que conectam o público jovem a momentos genuínos de devocional e oração.
                        </p>
                    </div>
                    <img src="imagens/jovem-artigo01.jpg" className='img-artigo' alt="" srcset="" />
                </div>
                <div className='container-artigo2'>
                    <img src="imagens/jovem-artigo02.jpg" className='img-artigo' alt="" srcset="" />
                    <div className='texto-artigo'>
                        <h1> O Som que Cura e Confronta </h1>
                        <p>
                            Diferente das canções antropocêntricas que focam apenas no bem-estar terreno ou no sucesso pessoal, o evangelho que ecoa na alma confronta o nosso ego para nos esvaziar de nós mesmos. <br />
                            É através dessa entrega que a verdadeira adoração acontece: <br />
                            • Cura para as feridas ocultas: Enquanto o mundo oferece anestésicos temporários, o evangelho cura a alma através do perdão e da graça divina. <br />
                            • Resgate da identidade: Ele lembra ao ser humano quem ele é em Deus, desfazendo as amarras da ansiedade e das cobranças sociais.<br />
                            • Profundidade versus Superficialidade: Canções e mensagens enraizadas na Palavra não geram apenas um arrepio emocional passageiro, mas criam raízes que sustentam o cristão nos dias de deserto.<br />
                            Para a liderança pastoral, o desafio atual é resgatar essa essência. Ministros de louvor e pregadores precisam entender que o coração do homem não tem fome de espetáculos ou luzes, mas sim de uma palavra genuína que traga a presença real e manifesta do Espírito Santo.
                        </p>
                    </div>
                </div>
            </div>
            <VersiculoRadio />
            <Footer />
        </main>
    );


};


export default PagePalavraGospel;