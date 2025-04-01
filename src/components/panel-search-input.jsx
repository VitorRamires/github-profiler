import { useState } from "react";

export function SearchInput({ setUserName, fetchProfile }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmitInput(event) {
    event.preventDefault();
    fetchProfile(inputValue);
    setUserName(inputValue);
  }

  return (
    <div className="search">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleSubmitInput}>
        <img src="/src/assets/icons/search-icon.svg" alt="" />
      </button>
    </div>
  );
}
