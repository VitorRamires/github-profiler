import { useState } from "react";

export function useGithubProfile() {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProfile(userName) {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      setProfile(data);
    } catch {
      setProfile(null);
    } finally {
      setIsLoading(false);
    }
  }

  return { profile, isLoading, fetchProfile };
}
