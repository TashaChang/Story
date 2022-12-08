import React, { useState } from "react";

const Search = ({ loading }) => {
  const [text, setText] = useState("");

  function pass(e) {
    e.preventDefault();
    loading(text);
  }

  function enter(e) {
    if (e.key === "Enter") {
      loading(text);
    }
  }

  return (
    <header>
      <input
        onKeyDown={enter}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Search Image Term..."
      />
      <button onClick={pass} type="submit">
        Search
      </button>
    </header>
  );
};

export default Search;
