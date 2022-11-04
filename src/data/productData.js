import flowers from '../img/flowers.jpg';
import heroin from '../img/heroin.jpg';

const products = [
    {
        id: 0,
        isAddButton: true,
        name: "Add"
    },
    {
        id: 1,
        isAddButton: false,
        name: "Flowers",
        img: flowers,
    },
    {
        id: 2,
        isAddButton: false,
        name: "Heroin",
        img: heroin,
    }
];

export default products;