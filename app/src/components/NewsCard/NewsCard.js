import buttonImage from "../../images/saved-blue.svg";
import buttonImageUnsaved from "../../images/Rectangle8.svg";
import React from "react";

function NewsCard({
  date,
  title,
  description,
  type,
  keyword,
  handleSaveClick,
  image,
  isLoggedIn,
  article,
  handleDelete,
  token,
  savedNews,
  setSavedNews,
}) {
  const [saved, setSaved] = React.useState(false);
  const [id, setId] = React.useState("");
  const handleDeleteClick = (e) => {
    e.preventDefault();
    const selectedId = article._id ? article._id : id;
    handleDelete(token, selectedId)
      .then((data) => {
        const savedNewsFiltered = savedNews.filter((a) => a._id !== selectedId);
        setSavedNews(savedNewsFiltered);
        !keyword && setArticleStateToUnSaved(e);
      })
      .catch((err) => console.log(err));
  };

  const setArticleStateToUnSaved = (e) => {
    setSaved(false);
    e.target.style.backgroundImage = `url(${buttonImageUnsaved})`;
  };

  const setArticleStateToSaved = (e) => {
    setSaved(true);
    e.target.style.backgroundImage = `url(${buttonImage})`;
  };

  const handleSave = (e) => {
    e.preventDefault();
    handleSaveClick(article)
      .then((data) => {
        setId(data.data._id);
        const currentSavedNews = savedNews;
        setSavedNews([data.data, ...currentSavedNews]);
        setArticleStateToSaved(e);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="card">
      {keyword ? <p className="card__keyword">{keyword}</p> : ""}
      <div className="card__wrapper">
        <button
          onClick={
            isLoggedIn
              ? saved
                ? handleDeleteClick
                : keyword
                ? handleDeleteClick
                : handleSave
              : undefined
          }
          className={
            keyword ? "card__button_delete card__button" : "card__button"
          }
          type="button"
        ></button>
        {isLoggedIn ? (
          keyword ? (
            <p className="card__do">Remove from saved</p>
          ) : (
            ""
          )
        ) : (
          <p className="card__do">Sign in to save articles</p>
        )}
      </div>

      <img className="card__image" src={image} alt="card" />
      <div className="card__content">
        <p className="card__date">{date}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <p className="card__type">{type.toUpperCase()}</p>
      </div>
    </div>
  );
}

export default NewsCard;
