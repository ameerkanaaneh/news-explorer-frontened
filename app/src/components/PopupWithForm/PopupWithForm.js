function PopupWithForm(props) {
  return (
    <section className={props.isOpened ? "popup popup_opened" : "popup"}>
      <div className="popup__container">
        <button
          className="popup__close"
          onClick={props.closeAllPopups}
          type="button"
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        {props.children ? (
          <form
            className="popup__form"
            action="submit"
            onSubmit={props.handleSubmit}
          >
            <fieldset className="popup__fields">{props.children}</fieldset>
            <p className="popup__alt">
              {props.children ? "or" : ""}
              <button
                onClick={props.handleAltBtnClick}
                className="popup__alt-way"
              >
                {props.altButton}
              </button>
            </p>
          </form>
        ) : (
          <p className="popup__alt popup__alt_left">
            {props.children ? "or" : ""}
            <button
              onClick={props.handleAltBtnClick}
              className="popup__alt-way popup__alt-way_left"
            >
              {props.altButton}
            </button>
          </p>
        )}
      </div>
    </section>
  );
}
export default PopupWithForm;
