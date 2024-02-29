import React, { Component } from 'react';

class FlashMessage extends Component {

    state = {
        message: <h3 className="success">{this.props.message}</h3>,
        duration: this.props.duration
    }

    messageHandler = () => {
        setTimeout(() => {
            this.setState({
                message: ""
            })
            this.props.flashMessageRemoveSavedMessaegHandler();
        }, this.state.duration);
    }

    render(){

        this.messageHandler();

        return(
            <div>
                {this.state.message}
            </div>
        )
    }
}

export default FlashMessage