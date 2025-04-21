import { ProfilePanel } from "./components/profile-panel";
import { blur1 } from "./assets/icons/blur1.svg";
import { blur2 } from "./assets/icons/blur2.svg";
import { dots } from "./assets/images/decoration.png";
function App() {
  return (
    <>
      <div className="ellipse-right">
        <img src={blur1} alt="blur1" />
      </div>
      <div className="ellipse-left">
        <img src={blur2} alt="blur2" />
      </div>
      <div className="center">
        <div className="point-decoration">
          <img src={dots} alt="dot-points-decoration" />
        </div>
        <ProfilePanel />
      </div>
    </>
  );
}

export default App;
