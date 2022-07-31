import buttonImage from "../../images/saved-blue.svg";

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
}) {
  const handleDeleteClick = (e) => {
    e.preventDefault();
    console.log(article._id);
    handleDelete(token, article._id);
  };

  const setArticleStateToSaved = (e) => {
    e.target.style.backgroundImage = `url(${buttonImage})`;
  };

  const handleSave = (e) => {
    e.preventDefault();
    handleSaveClick(article).then((data) => {
      console.log(data);
      setArticleStateToSaved(e);
    });
  };
  return (
    <div className="card">
      {keyword ? <p className="card__keyword">{keyword}</p> : ""}
      <div className="card__wrapper">
        <button
          onClick={
            isLoggedIn && (handleDelete ? handleDeleteClick : handleSave)
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
