import { useState, useEffect } from "react";

export function useGithubProfile(userName) {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProfile() {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      setProfile(data);
    } catch {
      setProfile(null);
      console.log("Algo deu errado ao buscar o profile");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, [userName]);

  return { profile, isLoading };
}
