import Footer from "../Footer/Footer";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
function SavedNews({
  handelOpenClick,
  handleCloseClick,
  isOpened,
  isLoggedIn,
  handleLogoutClick,
  savedNews,
  setSavedNews,
  token,
  handleDelete,
}) {
  return (
    <div className="saved-news">
      <SavedNewsHeader
        token={token}
        handleLogoutClick={handleLogoutClick}
        handelOpenClick={handelOpenClick}
        handleCloseClick={handleCloseClick}
        isOpened={isOpened}
        savedNews={savedNews}
      />
      <main className="saved-new__main">
        <section className="saved-news__cards">
          <NewsCardList>
            {savedNews.map((article, i) => {
              return (
                <li key={i} className="news-card-list__card">
                  <NewsCard
                    token={token}
                    handleDelete={handleDelete}
                    article={article}
                    isLoggedIn={isLoggedIn}
                    date={article.date}
                    title={article.title}
                    description={article.text}
                    type={article.source}
                    keyword={article.keyword}
                    image={article.image}
                    savedNews={savedNews}
                    setSavedNews={setSavedNews}
                  />
                </li>
              );
            })}
          </NewsCardList>
        </section>
      </main>
      <Footer type="saved-news" />
    </div>
  );
}

export default SavedNews;
