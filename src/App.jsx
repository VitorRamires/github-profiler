import { ProfilePanel } from "./components/profile-panel";

function App() {
  return (
    <>
      <div className="ellipse-right">
        <img src="/src/assets/icons/blur1.svg" alt="" />
      </div>
      <div className="ellipse-left">
        <img src="/src/assets/icons/blur2.svg" alt="" />
      </div>
      <div className="center">
        <div className="point-decoration">
          <img
            src="/src/assets/images/decoration.png"
            alt="dot-points-decoration"
          />
        </div>
        <ProfilePanel />
      </div>
    </>
  );
}

export default App;
