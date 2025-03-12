import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {" "}
        <TimerChallenge title="Easy" targetTime={10} />
        <TimerChallenge title="Medium" targetTime={20} />
        <TimerChallenge title="Hard" targetTime={30} />
        <TimerChallenge title="Insane" targetTime={40} />
      </div>
    </>
  );
}

export default App;
