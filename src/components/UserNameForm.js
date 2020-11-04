import React, { Component } from 'react'
import { UserService } from '../services/service';
import User from './User';

export default class UserNameForm extends Component {

    state = {
        users: [],
        filteredValue: ''
    }

    userService = new UserService();

    async componentDidMount() {
        this.setState({users: await this.userService.getUsers()});   
    }

    onChange = (event) => {
        this.setState({filteredValue: event.target.value})
    }

    render() {
        const {filteredValue, users} = this.state;

        return (
            <div>
                <form>
                    <h4 class="font-weight-light">
                        Enter user name or surname:
                    </h4>
                    <input class="form-control form-control-lg shadowOwn" type="text" onChange={this.onChange}></input>
                </form>
                { 
                    filteredValue && users.filter(user => {
                        // return user.name.toLowerCase().startsWith(filteredValue.toLowerCase())
                        return user.name.split(' ').find(value => {
                            return value.toLowerCase().startsWith(filteredValue.toLowerCase())
                        })
                    }).map(user => {
                        return <User user={user} key={user.id}/>
                    })
                }
            </div>
        )
    }


}
