import MusicCard from "./cardsPageMusicas";
import "./styleCardMusicas.css";
import Menu from '../../components/menu/menu'
import VersiculoRadio from '../../components/versiculoRadio/versiculoRadio'
import Footer from '../../components/footer/footer'


function PageMusicas() {
  const musicas = [
    {
      artist: "Cantor 1",
      song: "Nome da Música 1",
      image: "imagens/show-card.png",
      spotifyUrl: "https://open.spotify.com",
    },
    {
      artist: "Cantor 2",
      song: "Nome da Música 2",
      image: "imagens/show-card.png",
      spotifyUrl: "https://open.spotify.com",

    },
    {
      artist: "Cantor 3",
      song: "Nome da Música 3",
      image: "imagens/show-card.png",
      spotifyUrl: "https://open.spotify.com",

    },
    {
      artist: "Cantor 4",
      song: "Nome da Música 4",
      image: "imagens/show-card.png",
      spotifyUrl: "https://open.spotify.com",

    },
  ];

  return (
    <main className="music-section">
      <Menu />

      <div className="music-header">
        <span>DESTAQUES</span>
        <h2>Músicas em destaque</h2>
        <p>
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