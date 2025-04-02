import { useState } from "react";

export function SearchInput({ setUserName, fetchProfile, setSearched }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmitInput(event) {
    event.preventDefault();

    if (!inputValue.trim()) {
      alert("Insira um nome de usuário");
    }

    fetchProfile(inputValue);
    setUserName(inputValue);
    setSearched(true);
  }

  return (
    <div className="search">
      <input
        type="text"
        value={inputValue}
        placeholder = "Digite aqui um usuário do Github"
        aria-label="Campo de busca"
        onChange={(e) => setInputValue(e.target.value)
        }
      />

      <button onClick={handleSubmitInput}>
        <img src="/src/assets/icons/search-icon.svg" alt="" />
      </button>
    </div>
  );
}
