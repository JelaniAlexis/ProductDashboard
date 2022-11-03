import React from 'react';
import Products from '../Products/Products';
import Sidebar from '../Sidebar/Sidebar';
import Modal from '../Modal/Modal';
import './Dashboard.css';

import flowers from '../../img/flowers.jpg';
import heroin from '../../img/heroin.jpg';
import jesus from '../../img/jesus.jpg';
import music from '../../img/music.jpg';
import sky from '../../img/sky.jpg';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {productCards: [], open: true}
    }

    onButtonClicked = () => {

        this.setState({
            open: !this.state.open,
        })
    }

    addButtonClicked = (input) => {

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

        let newCard = [
            {
                name: input,
                img: newCardImg
            }
        ]

        let newArray = this.state.productCards.concat(newCard);

        this.setState({
            productCards: newArray,
            open: !this.state.open,
        })
    }

    componentDidMount() {
        let productCards = [
            {
                name: "Placeholder"
            },
            {
                name: "Flowers",
                img: flowers,
            },
            {
                name: "Heroin",
                img: heroin,
            }
        ];
        this.setState({productCards: productCards});
    }



    render() {
        let navItems = [
            {
                name: "Home",
                notifications: 0,
            },
            {
                name: "Facturen",
                notifications: 1,
            },
            {
                name: "Bestellingen",
                notifications: 0,
            },
            {
                name: "Retour",
                notifications: 0,
            },
            {
                name: "Contact",
                notifications: 1,
            }
        ];

        if (this.state.open) {
            return(
                <article className="dashboard">
                    <Sidebar navItems={navItems} buttonText="Go Premium"/>
                    <Products productCards={this.state.productCards} headerText={"Mijn Producten"} buttonSymbol={"+"} buttonText="Voeg een product toe..." onButtonClicked={this.onButtonClicked}/>
                </article>
            )
        }
        return <Modal onButtonClicked={this.onButtonClicked} addButtonClicked={this.addButtonClicked}/>
    }    
}

export default Dashboard;