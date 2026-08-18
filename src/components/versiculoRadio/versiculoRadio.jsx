import { useRef, useState } from "react";
import "./styleVersiculoRadio.css";

// URL REAL DO STREAM DA GOSPEL FM 89.3
const RADIO_STREAM_URL = "https://stream3.svrdedicado.org/8070/stream";

export default function VersiculoRadio() {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRadio = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    setError(false);

    // =========================================
    // PAUSAR
    // =========================================

    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
      return;
    }

    // =========================================
    // CONFIGURAR STREAM
    // =========================================

    if (audio.src !== RADIO_STREAM_URL) {
      audio.src = RADIO_STREAM_URL;
    }

    setLoading(true);

    // =========================================
    // REPRODUZIR
    // =========================================

    try {
      await audio.play();

      setPlaying(true);
      setError(false);
      setLoading(false);

    } catch (err) {

      console.error("Erro ao reproduzir rádio:", err);

      setPlaying(false);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <section className="gospel-widget">

      <div className="gospel-card">

        {/* =====================================
            VERSÍCULO
        ====================================== */}

        <div className="gospel-section gospel-section-left">

          <h2 className="gospel-heading">

            <BookIcon />

            <span>
              VERSÍCULO DO DIA
            </span>

          </h2>

          <div className="verse-content">

            <span className="quote-mark">
              “
            </span>

            <div className="verse-text-wrapper">

              <p className="verse-text">
                O Senhor é o meu pastor; nada me faltará.”
              </p>

              <span className="verse-reference">
                Salmos 23:1
              </span>

            </div>

          </div>

        </div>


        {/* =====================================
            DIVISOR
        ====================================== */}

        <div className="gospel-divider" />


        {/* =====================================
            RÁDIO
        ====================================== */}

        <div className="gospel-section gospel-section-right">

          <h2 className="gospel-heading">

            <RadioIcon />

            <span>
              RÁDIO GERAÇÃO GOSPEL
            </span>

          </h2>


          <p className="radio-description">
            Louvores que edificam e transformam vidas!
          </p>


          <button
            type="button"
            className="radio-button"
            onClick={handleRadio}
            disabled={loading}
          >

            {loading ? (
              <LoadingIcon />
            ) : playing ? (
              <PauseIcon />
            ) : (
              <PlayIcon />
            )}

            <span>
              {loading
                ? "CONECTANDO..."
                : playing
                  ? "PAUSAR RÁDIO"
                  : "OUVIR AO VIVO"
              }
            </span>

          </button>


          {/* ===================================
              STATUS
          ==================================== */}

          {playing && (
            <div className="radio-status">

              <span className="radio-status-dot" />

              <span>
                Rádio reproduzindo ao vivo
              </span>

            </div>
          )}


          {/* ===================================
              ERRO
          ==================================== */}

          {error && (
            <div className="radio-error">

              Não foi possível conectar à rádio.

            </div>
          )}


          {/* ===================================
              AUDIO
          ==================================== */}

          <audio
            ref={audioRef}
            preload="none"
            onPlay={() => {
              setPlaying(true);
              setLoading(false);
              setError(false);
            }}
            onPause={() => {
              setPlaying(false);
            }}
            onError={(event) => {

              console.error(
                "Erro no elemento de áudio:",
                event
              );

              setPlaying(false);
              setLoading(false);
              setError(true);

            }}
          />

        </div>

      </div>

    </section>
  );
}


/* ============================================
   LIVRO
============================================ */

function BookIcon() {

  return (
    <svg
      className="gospel-heading-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >

      <path
        d="M3.5 5.2C3.5 4.54 4.04 4 4.7 4H10.2C11.19 4 12 4.81 12 5.8V19.3C11.5 18.74 10.77 18.4 9.95 18.4H4.7C4.04 18.4 3.5 17.86 3.5 17.2V5.2Z"
        fill="currentColor"
      />

      <path
        d="M20.5 5.2C20.5 4.54 19.96 4 19.3 4H13.8C12.81 4 12 4.81 12 5.8V19.3C12.5 18.74 13.23 18.4 14.05 18.4H19.3C19.96 18.4 20.5 17.86 20.5 17.2V5.2Z"
        fill="currentColor"
      />

      <path
        d="M6.5 8H9.5M6.5 10.5H9.5"
        stroke="#f8f0e7"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      <path
        d="M14.5 8H17.5M14.5 10.5H17.5"
        stroke="#f8f0e7"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

    </svg>
  );
}


/* ============================================
   RÁDIO
============================================ */

function RadioIcon() {

  return (
    <svg
      className="gospel-heading-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >

      <rect
        x="3"
        y="6"
        width="18"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="9"
        cy="12.5"
        r="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle
        cx="9"
        cy="12.5"
        r="1"
        fill="currentColor"
      />

      <path
        d="M14 10H18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M14 13H18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M7 4L17 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

    </svg>
  );
}


/* ============================================
   PLAY
============================================ */

function PlayIcon() {

  return (
    <svg
      className="button-icon"
      viewBox="0 0 24 24"
      fill="none"
    >

      <circle
        cx="12"
        cy="12"
        r="10"
        fill="white"
      />

      <path
        d="M10 8.5L16 12L10 15.5V8.5Z"
        fill="#ad1711"
      />

    </svg>
  );
}


/* ============================================
   PAUSE
============================================ */

function PauseIcon() {

  return (
    <svg
      className="button-icon"
      viewBox="0 0 24 24"
      fill="none"
    >

      <circle
        cx="12"
        cy="12"
        r="10"
        fill="white"
      />

      <rect
        x="9"
        y="8"
        width="2.5"
        height="8"
        rx="1"
        fill="#ad1711"
      />

      <rect
        x="12.5"
        y="8"
        width="2.5"
        height="8"
        rx="1"
        fill="#ad1711"
      />

    </svg>
  );
}


/* ============================================
   LOADING
============================================ */

function LoadingIcon() {

  return (
    <span className="radio-loading">
      <span />
      <span />
      <span />
    </span>
  );
}