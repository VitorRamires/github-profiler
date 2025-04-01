import { useState } from "react";
import { SearchInput } from "./panel-search-input";
import { useGithubProfile } from "../hooks/useGithubProfile";

export function ProfileInfo() {
  const [userName, setUserName] = useState("");
  const { profile, isLoading } = useGithubProfile(userName);

  return (
    <>
      <SearchInput setUserName={setUserName} />
      {isLoading ? (
        "Buscando"
      ) : profile ? (
        <div className="infos">
          <img src={profile.avatar_url} alt="" />
          <h3>Nome: {profile.name}</h3>
          <h4>Resumo: {profile.bio}</h4>
        </div>
      ) : (
        "Usuário não encontrado"
      )}
    </>
  );
}
