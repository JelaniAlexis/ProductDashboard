import React from 'react';
import './Modal.css';

import modalModes from '../../data/modalModes';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ""};
    }

    updateInput = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    addProduct = () => {
        if (this.state.input.length > 0) this.props.addButtonClicked(this.state.input);
    }

    editProduct = () => {
        if (this.state.input.length > 0) this.props.editButtonClicked(this.state.input);
    }

    componentDidMount() {
        this.setState({
            input: this.props.clickedCard.isAddButton ? "" : this.props.clickedCard.name,
        })
    }

    render() {
        let button;
        if (this.props.mode === modalModes.Add) button = <button className="modal__button" onClick={this.addProduct}>Add</button>;
        else button = <button className="modal__button" onClick={this.editProduct}>Edit</button>
        
        return(
            <article className="modal">
                <button className="modal__closebutton" onClick={this.props.onButtonClicked}>x</button>
                <div className="modal__wrapper">
                    <label htmlFor="name" className="modal__label">Name</label>
                    <input onChange={this.updateInput} value={this.state.input} type="text" className="modal__input" id="name"/>
                </div>
                {button}
            </article>
        )
    }
}

export default Modal