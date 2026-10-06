import { Link } from "react-router-dom";
import noticias from "../../Data/noticias";

import "./styleCard.css";

function NewsCards() {
  return (
    <section className="news-section">

      <h2 className="h2Publicacoes">
        ÚLTIMAS PUBLICAÇÕES
      </h2>

      <div className="news-container">

        {noticias.map((item) => (

          <article
            className="news-card"
            key={item.id}
          >

            <img
              className="news-image"
              src={item.image}
              alt={item.title}
            />

            <div className="news-content">

              <span className="news-category">
                {item.category}
              </span>

              <h2>
                {item.title}
              </h2>

              <p>
                {item.description}
              </p>

              <div className="news-footer">

                <span className="news-date">
                  🕘 {item.date}
                </span>

                <span className="separator"></span>

                <Link
                  to={item.link}
                  className="read-more"
                >
                  Leia mais
                  <span>→</span>
                </Link>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default NewsCards;