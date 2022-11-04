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
import modalModes from '../../data/modalModes';

// Import helpers from helpers folder
import chooseImage from '../../helpers/chooseImage';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productCards: [],
            open: true,
            clickedCard: {},
            modalMode: modalModes.Add
        }
    }

    onButtonClicked = () => {

        this.setState({
            open: !this.state.open,
        })
    }

    onCardClicked = (product) => {
        const modalMode = this.state.productCards[product.id].isAddButton ? modalModes.Add : modalModes.Edit;
        this.setState({
            open: !this.state.open,
            clickedCard: this.state.productCards[product.id],
            modalMode: modalMode
        });
        
    }

    addButtonClicked = (input) => {

        let newCardImg = chooseImage(input);

        let newCard = [
            {
                id: this.state.productCards.length,
                isAddButton: false,
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

    editButtonClicked = (input) => {
        let oldCard = this.state.clickedCard;

        let newProductCardsState = this.state.productCards.filter(product => {
            if (product.id === oldCard.id) return null;
            return product;
        });

        console.log(newProductCardsState);

        let newCard = {
            id: oldCard.id,
            isAddButton: false,
            name: input,
            img: chooseImage(input)
        }

        let newArray = newProductCardsState.concat(newCard).sort((a, b) => {
            return a.id - b.id;
        });

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
        return <Modal mode={this.state.modalMode} clickedCard={this.state.clickedCard} onButtonClicked={this.onButtonClicked} addButtonClicked={this.addButtonClicked} editButtonClicked={this.editButtonClicked}/>
    }    
}

export default Dashboard;