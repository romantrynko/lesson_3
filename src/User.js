import React, { Component } from 'react'

export default class User extends Component {
    render() {

        let { id, name, email } = this.props.user
        
        return (
            <div>
                    <div>
                        <h4>{id}. {name}</h4>
                        <p>
                        
                            <br/>
                            email: {email}
                        </p>
                    </div>
            </div>
        )
    }
}