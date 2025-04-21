import { ProfileInfo } from "./profile-information";
import { githubIcon } from "../assets/icons/github-icon.svg";
export function PanelContent() {
  return (
    <>
      <>
        <div className="title">
          <img src={githubIcon} alt="github icon" />
          <p>
            Perfil <span>Github</span>
          </p>
        </div>
        <ProfileInfo />
      </>
    </>
  );
}
