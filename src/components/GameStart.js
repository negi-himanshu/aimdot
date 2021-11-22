import '../App.css';
import coverImage from '../cover.webp';

function GameStart({onStartGameClick}) {
  return (
    <>
        <img src={coverImage} style={styles.coverImage} alt="cover" />
        <p />
        <div className="App-button" onClick={onStartGameClick}>START</div>
    </>
  );
}

const styles = {
  coverImage: {
    height: "50vh",
    borderRadius: "10px"
  }
}

export default GameStart;
