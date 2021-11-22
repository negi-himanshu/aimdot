import { useEffect, useState } from 'react';
import '../App.css';

const SIDE_THRESHOLD_PERCENT = 0.2

function GameInProgress({onDotClick}) {
    const { height, width } = useWindowDimensions();
    const {x, y} = getDotCoordinates(height, width)
    return (
        <div style={styles.root}>
            <div style={{...styles.dot, position: "absolute", top: y, left: x}} onClick={onDotClick}/>
        </div>
    );
}

function getDotCoordinates(height, width) {
    const x = getRandomInt(SIDE_THRESHOLD_PERCENT * width, (1 - SIDE_THRESHOLD_PERCENT) * width)
    const y = getRandomInt(SIDE_THRESHOLD_PERCENT * height, (1 - SIDE_THRESHOLD_PERCENT) * height)
    return {x, y}
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const styles = {
    root: {
        width: "100vw",
        height: "100vh"
    },
    dot: {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        backgroundColor: "#FFCE45"
    }
}

export default GameInProgress;
