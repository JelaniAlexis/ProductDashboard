import flowers from '../img/flowers.jpg';
import heroin from '../img/heroin.jpg';
import jesus from '../img/jesus.jpg';
import music from '../img/music.jpg';
import sky from '../img/sky.jpg';


const chooseImage = (input) => {
    let newCardImg;

    switch (input) {
        case "flowers":
            newCardImg = flowers;
            break;
        
        case "heroin":
            newCardImg = heroin;
            break;
        
        case "jesus":
            newCardImg = jesus;
            break;
        
        case "music":
            newCardImg = music;
            break;
        default:
            newCardImg = sky;
            break;
    }

    return newCardImg;
}

export default chooseImage;