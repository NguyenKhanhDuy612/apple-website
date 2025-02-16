import navChange from '../../assets/sounds/navChange.wav';
import modeChange from '../../assets/sounds/modeChange.wav';

const PlaynavChangeSound = () => {
    const sound = new Audio(navChange);
    sound.play();
};

const themeModeChange = () => {
    const sound = new Audio(modeChange);
    sound.play();
};

export { PlaynavChangeSound, themeModeChange };
