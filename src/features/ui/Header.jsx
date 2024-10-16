import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <header>
      <Link to="/">Fast React Pizza co</Link>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search order #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>🔍</button>
      </form>
      <h1>Mihael</h1>
    </header>
  );
}

export default Header;
