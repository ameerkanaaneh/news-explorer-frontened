function SearchForm() {
  return (
    <form action="submit" className="searchForm">
      <input className="searchForm__input" placeholder="Enter topic"></input>
      <button type="submit" className="searchForm__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
