import '../App.css';

function GameCompleted({restartGameClick, timeTaken}) {
  return (
    <>
      <p>Time taken - {timeTaken / 1000} secs</p>
      <div className="App-button" onClick={restartGameClick}>Restart</div>
    </>
  );
}

export default GameCompleted;
