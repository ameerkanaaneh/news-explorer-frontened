import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";

function CardsSection({
  articles,
  isLoggedIn,
  maxArticlesRows,
  handleShowMoreClick,
  handleSaveClick,
  handleDelete,
  token,
  savedNews,
  setSavedNews,
}) {
  return (
    <div className="cards-section">
      <h2 className="cards-section__title">Search results</h2>
      <NewsCardList>
        {articles &&
          articles.map((article, i) => {
            if (i < maxArticlesRows * 3) {
              return (
                <li className="news-card-list__card" key={i}>
                  <NewsCard
                    token={token}
                    handleDelete={handleDelete}
                    article={article}
                    handleSaveClick={handleSaveClick}
                    savedNews={savedNews}
                    setSavedNews={setSavedNews}
                    isLoggedIn={isLoggedIn}
                    date={new Date(article.publishedAt).toLocaleDateString(
                      undefined,
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                    title={article.title}
                    description={article.description}
                    type={article.source.name}
                    image={article.urlToImage}
                  />
                </li>
              );
            } else {
              return;
            }
          })}
      </NewsCardList>
      <button className="cards-section__button" onClick={handleShowMoreClick}>
        Show more
      </button>
    </div>
  );
}

export default CardsSection;
