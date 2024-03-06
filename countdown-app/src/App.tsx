import CountDown from "./CountDown";

function App() {
  return (
    <div className="container">
      <div className="countdown">
        <h3>We are still cooking this project.</h3>
        <p>We will launch hopefully, (if we are not busy) in</p>
        <div className="countdown-wrapper">
          <CountDown duration={4 * 24 * 60 * 60 * 1000} />
        </div>
      </div>
    </div>
  );
}

export default App;
