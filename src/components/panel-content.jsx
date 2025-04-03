import { ProfileInfo } from "./profile-information";

export function PanelContent() {
  return (
    <>
      <>
        <div className="title">
          <img src="/src/assets/icons/github-icon.svg" alt="github icon" />
          <p>
            Perfil <span>Github</span>
          </p>
        </div>
        <ProfileInfo />
      </>
    </>
  );
}
