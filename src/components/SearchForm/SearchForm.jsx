import { useState } from "react";

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (ev) => {
    setQuery(ev.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
    setQuery("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Enter movie title"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
