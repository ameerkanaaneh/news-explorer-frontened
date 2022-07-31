function SearchForm(props) {
  return (
    <form onSubmit={props.handleSearchClick} className="search-form">
      <input
        className="search-form__input"
        placeholder="Enter topic"
        value={props.searchWorld}
        onChange={props.handleSearchChange}
      ></input>
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
