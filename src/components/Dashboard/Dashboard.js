import React from 'react';

// Components
import Products from '../Products/Products';
import Sidebar from '../Sidebar/Sidebar';
import Modal from '../Modal/Modal';

// Styling
import './Dashboard.css';

// Import data from data folder
import productData from '../../data/productData';
import navItems from '../../data/navItems';

// Import helpers from helpers folder
import chooseImage from '../../helpers/chooseImage';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {productCards: [], open: true, clickedCard: {}}
    }

    onButtonClicked = () => {

        this.setState({
            open: !this.state.open,
        })
    }

    onCardClicked = (id) => {
        this.setState({
            open: !this.state.open,
            clickedCard: this.state.productCards[id],
        }, () => {
            console.log(this.state.clickedCard);
        });
        
    }

    addButtonClicked = (input) => {

        let newCardImg = chooseImage(input);

        let newCard = [
            {
                id: this.state.productCards.length,
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
        this.setState({productCards: productData});
    }



    render() {
        

        if (this.state.open) {
            return(
                <article className="dashboard">
                    <Sidebar navItems={navItems} buttonText="Go Premium"/>
                    <Products onCardClicked={this.onCardClicked} productCards={this.state.productCards} headerText={"Mijn Producten"} buttonSymbol={"+"} buttonText="Voeg een product toe..." onButtonClicked={this.onButtonClicked}/>
                </article>
            )
        }
        return <Modal clickedCard={this.state.clickedCard} onButtonClicked={this.onButtonClicked} addButtonClicked={this.addButtonClicked}/>
    }    
}

export default Dashboard;