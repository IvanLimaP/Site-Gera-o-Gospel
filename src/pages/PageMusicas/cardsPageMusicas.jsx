import "./styleCardMusicas.css";

function MusicCard({ artist, song, image, spotifyUrl }) {
  return (
    <a
      href={spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="music-card"
      aria-label={`Ouvir ${song} de ${artist} no Spotify`}
    >
      <div className="music-card-image">
        <img src={image} alt={`Capa de ${song} - ${artist}`} />

        <div className="music-card-overlay"></div>

        <div className="music-card-play">
          ▶
        </div>

        <div className="spotify-badge">
          Spotify
        </div>
      </div>

      <div className="music-card-content">
        <span className="music-card-label">
          Música
        </span>

        <h3>{song}</h3>

        <p>{artist}</p>
      </div>
    </a>
  );
}

export default MusicCard;