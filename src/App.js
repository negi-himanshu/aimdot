import './App.css';
import { useReducer } from 'react';
import GameReducer, { GameActions, GameStatus, InitialGameState } from './reducer/GameReducer';
import GameStart from './components/GameStart';
import GameInProgress from './components/GameInProgress';
import GameCompleted from './components/GameCompleted';

function App() {
  const [gameState, dispatch] = useReducer(GameReducer, InitialGameState)
  const onStartGameClick = () => dispatch({ type: GameActions.START})
  const onDotClick = () => dispatch({type: GameActions.ON_DOT_CLICK})
  return (
    <div className="Page">
      <Game 
        gameState={gameState}
        onStartGameClick={onStartGameClick}
        onDotClick={onDotClick}
      />
    </div>
  );
}

function Game({gameState, onStartGameClick, onDotClick}) {
  const {status, timeTaken} = gameState || {}
  if (status === GameStatus.READY) {
    return <GameStart onStartGameClick={onStartGameClick} />
  } else if (status === GameStatus.IN_PROGRESS) {
    return <GameInProgress onDotClick={onDotClick} />
  } else if (status === GameStatus.COMPLETED) {
    return <GameCompleted restartGameClick={onStartGameClick} timeTaken={timeTaken} />
  }
  return null
}

export default App;
