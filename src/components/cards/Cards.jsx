import "./styleCard.css";

const news = [
  {
    image: "/imagens/show-card.png",
    category: "MÚSICA",
    title: "Novo lançamento gospel emociona o público",
    description:
      "O cantor anunciou seu novo projeto e já está disponível em todas as plataformas digitais.",
    date: "17 de ago, 2026",
  },
  {
    image: "/imagens/palavra-card.png",
    category: "PALAVRA",
    title: "Uma palavra de esperança para o seu dia",
    description:
      "Deus tem cuidado de cada detalhe da sua vida. Confie, descanse e deixe Ele agir.",
    date: "17 de ago, 2026",
  },
  {
    image: "/imagens/noticia-card.png",
    category: "NOTÍCIAS",
    title: "Evento gospel reúne milhares de pessoas no Brasil e no Mundo",
    description:
      "Louvor, adoração e mensagens que impactaram vidas e fortaleceram a fé dos participantes.",
    date: "16 de ago, 2026",
  },
];

function NewsCards() {
  return (
    <section className="news-section">
      <h2 className="h2Publicacoes">ULTIMAS PUBLICAÇÕES</h2>
      <div className="news-container">
        {news.map((item, index) => (
          <article className="news-card" key={index}>
            <div className="news-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="news-content">
              <span className="news-category">
                {item.category}
              </span>

              <h2>{item.title}</h2>

              <p>{item.description}</p>

              <div className="news-footer">
                <div className="news-date">
                  <span className="calendar-icon">▣</span>
                  <span>{item.date}</span>
                </div>

                <span className="separator"></span>

                <a href="#" className="read-more">
                  Leia mais
                  <span>→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default NewsCards;