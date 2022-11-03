import React from 'react';
import './Modal.css';

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

    updateProducts = () => {
        if (this.state.input.length > 0) this.props.addButtonClicked(this.state.input);
    }

    render() {
        return(
            <article className="modal">
                <button className="modal__closebutton" onClick={this.props.onButtonClicked}>x</button>
                <div className="modal__wrapper">
                    <label htmlFor="name" className="modal__label">Name</label>
                    <input onChange={this.updateInput} value={this.state.input} type="text" className="modal__input" id="name"/>
                </div>
                <button className="modal__button" onClick={this.updateProducts}>Add</button>
            </article>
        )
    }
}

export default Modal