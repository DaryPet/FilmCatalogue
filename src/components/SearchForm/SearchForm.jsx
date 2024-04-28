import { useState } from "react";
import css from "./SearchForm.module.css";

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState("");
  const [errorMessage, setErroMessage] = useState("");

  const handleChange = (ev) => {
    setQuery(ev.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      setErroMessage("Please enter film title");
      return;
    }
    onSubmit(query);
    setQuery("");
    setErroMessage("");
  };
  return (
    <div className={css.searchFrom}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          placeholder="Enter movie title"
          onChange={handleChange}
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      {errorMessage && <p сlassName={css.error}>{errorMessage}</p>}
    </div>
  );
}
