import image from "../../images/image_08.svg";
import buttonImage from "../../images/saved-blue.svg";

function NewsCard({ date, title, description, type, keyword }) {
  const changeBackgroundImage = (e) => {
    e.preventDefault();
    e.target.style.backgroundImage = `url(${buttonImage})`;
  };
  return (
    <div className="card">
      {keyword ? <p className="card__keyword">{keyword}</p> : ""}
      <div className="card__wrapper">
        <button
          onClick={!keyword && changeBackgroundImage}
          className={
            keyword ? "card__button_delete card__button" : "card__button"
          }
          type="button"
        ></button>
        <p className="card__do">
          {keyword ? "Remove from saved" : "Sign in to save articles"}
        </p>
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
