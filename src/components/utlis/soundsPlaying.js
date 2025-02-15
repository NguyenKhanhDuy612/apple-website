import navChange from '../../assets/sounds/navChange.wav';

const PlaynavChangeSound = () => {
    const sound = new Audio(navChange);
    sound.play();
};

export { PlaynavChangeSound };
