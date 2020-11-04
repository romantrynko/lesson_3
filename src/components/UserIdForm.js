import React, { Component } from 'react'
import { UserService } from '../services/service';

import User from './User'

export default class UserIdForm extends Component {

    state = {
        id: null,

        user: null
    }

    userService = new UserService();
    
    // onFormSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(this.state.id);
    // }

    
    onInputChange = async (event) => {
        const {value: id} = event.target;
        // const id = event.target.value
        this.setState({id, user: null});

        const regex = /^\d+$/;

        if (id && regex.test(id)) {
            const user = await this.userService.getUserById(Number(id));
            // console.log(user);
            this.setState({user})
        };

        // if (id && Number.isInteger(Number(id))) {
        //     const user = await this.userService.getUserById(Number(id));
        // console.log(user);
        // this.setState({user})
        // };
    }
    
    render() {
        return (
            <div >
                <form onSubmit={this.onFormSubmit}>
                <h4 class="font-weight-light">
                    Enter user id:
                </h4>
                    <input class="form-control form-control-lg shadowOwn" type="text" value={this.state.id} onChange={this.onInputChange}/>
                </form>
                {this.state.user && <User user={this.state.user}/>}
            </div>
        
        )
    }
}
