import { useState } from "react";
import { SearchInput } from "./panel-search-input";
import { useGithubProfile } from "../hooks/useGithubProfile";

export function ProfileInfo() {
  const [userName, setUserName] = useState("");
  const { profile, isLoading, fetchProfile } = useGithubProfile();

  const verifyProfile = profile && profile.name;

  return (
    <>
      <SearchInput
        setUserName={setUserName}
        userName={userName}
        fetchProfile={fetchProfile}
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
        <div className="not-found">
          <p>
            Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente.
          </p>
        </div>
      )}
    </>
  );
}
