import MusicCard from "./cardsPageMusicas";
import "./styleCardMusicas.css";
import Menu from '../../components/menu/menu'
import VersiculoRadio from '../../components/versiculoRadio/versiculoRadio'
import Footer from '../../components/footer/footer'


function PageMusicas() {
  const musicas = [
    {
      artist: "Alexander Lucio",
      song: "Buscar-Me-Eis e Me Achareis",
      image: "imagens/alexanderLucio.png",
      spotifyUrl: "https://open.spotify.com/intl-pt/album/7g8LWP9eQyiS9YIbziDPV8?highlight=spotify:track:6a5YMnpTVStVqoBwgOhjDi",
    },
    {
      artist: "Alexander Lucio",
      song: "O Fogo Arderá",
      image: "imagens/alexanderLucio2.png",
      spotifyUrl: "https://open.spotify.com/intl-pt/album/4rd6xVSZfkwaltIFTmZWNe?highlight=spotify:track:6ATNNv8tZF61fa7VwDH89j",

    },
    {
      artist: "Sara Evelyn",
      song: "Era Deus e Eu",
      image: "imagens/saraEvelyn.png",
      spotifyUrl: "https://open.spotify.com/intl-pt/album/4oHQmvKZ9uArhKJmR3XBig?highlight=spotify:track:0GWDhY3P7Y7YF9vOEeRNKp",

    },
    {
      artist: "Vitor Santana",
      song: "João 20 + Para Sempre",
      image: "imagens/vitorSantana.png",
      spotifyUrl: "https://open.spotify.com/intl-pt/album/3adHglUeEVq6ETuiGOwz3w?highlight=spotify:track:1S9fKs0sAdZPlL8ViOARnS",

    },
  ];

  return (
    <main className="music-section">
      <Menu />

      <div className="music-header">
        <span className="music-header-title">DESTAQUES</span>
        <h2 className="music-header-title">Músicas em destaque</h2>
        <p className="music-header-title">
          Ouça as músicas que estão fazendo sucesso.
        </p>
      </div>

      <div className="music-grid">
        {musicas.map((musica, index) => (
          <MusicCard
            key={index}
            artist={musica.artist}
            song={musica.song}
            image={musica.image}
            spotifyUrl={musica.spotifyUrl}
          />
        ))}
      </div>
      <Footer />

    </main>
  );
}

export default PageMusicas;