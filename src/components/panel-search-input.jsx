import { useState } from "react";

export function SearchInput({ setUserName }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmitInput(event) {
    event.preventDefault();
    setUserName(inputValue);
  }

  return (
    <div className="search">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="buscar">
        <button onClick={handleSubmitInput}>Buscar</button>
      </div>
    </div>
  );
}
