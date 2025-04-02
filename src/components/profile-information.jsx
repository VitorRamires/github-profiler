import { useState } from "react";
import { SearchInput } from "./panel-search-input";
import { useGithubProfile } from "../hooks/useGithubProfile";

export function ProfileInfo() {
  const [userName, setUserName] = useState("");
  const [searched, setSearched] = useState(false);
  const { profile, isLoading, fetchProfile } = useGithubProfile();
  const verifyProfile = profile && profile.name;

  return (
    <>
      <SearchInput
        setUserName={setUserName}
        userName={userName}
        fetchProfile={fetchProfile}
        setSearched={setSearched}
      />
      {isLoading ? (
        "Buscando"
      ) : verifyProfile ? (
        <div className="profile-info">
          <img src={profile.avatar_url} alt="" />
          <div className="profile-name_resume">
            <h3>{profile.name}</h3>
            <h4>{profile.bio}</h4>
          </div>
        </div>
      ) : (
        searched && (
          <div className="not-found">
            <p>
              Nenhum perfil foi encontrado com esse nome de usuário. Tente
              novamente.
            </p>
          </div>
        )
      )}
    </>
  );
}
