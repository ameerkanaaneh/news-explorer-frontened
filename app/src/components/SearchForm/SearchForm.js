function SearchForm() {
  return (
    <form action="submit" className="search-form">
      <input className="search-form__input" placeholder="Enter topic"></input>
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
