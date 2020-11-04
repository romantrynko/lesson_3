import React, { Component } from 'react'

export default class User extends Component {
    render() {

        let { id, name, username, email } = this.props.user
        
        return (
                <div class="card m-4 p-3 mb-2 bg-secondary text-white shadowOwn">
                    User:
                    <div class="card-body">
                        <h4 class="card-title">{id}. {name}</h4>
                        <p class="card-text">
                            email: {email}
                            <br/>
                            username: {username}
                        </p>
                    </div>
                </div>
        )
    }
}