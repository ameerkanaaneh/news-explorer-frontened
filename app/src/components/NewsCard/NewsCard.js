import image from "../../images/image_08.svg";

function NewsCard({ date, title, description, type, keyword }) {
  return (
    <div className="card">
      {keyword ? <p className="card__keyword">{keyword}</p> : ""}
      <div className="card__wrapper">
        <button
          className={
            keyword ? "card__button_delete card__button" : "card__button"
          }
          type="button"
        ></button>
        <p className="card__do">
          {keyword ? "Remove from saved" : "Sign in to save articles"}
        </p>
      </div>

      <img className="card__image" src={image} alt="image" />
      <div className="card__content">
        <p className="card__date">{date}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <p className="card__type">{type}</p>
      </div>
    </div>
  );
}

export default NewsCard;
