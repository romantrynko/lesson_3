import React, { Component } from 'react'

export default class ControlledForm extends Component {

    state = {
        name: 'kokos'
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" value={this.state.name} onChange={this.onInputChange}/>

                    <button>Send</button>

                </form>
            </div>
        )
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name);
    }

    
    onInputChange = (event) => {
        this.setState({name: event.target.value});
        console.log(event.target.value);
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState);
    }
}
