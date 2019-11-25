//React, {Component} from 'react is the same as import React from 'react'
//in the class you need to do class ____ extends Component vs class ____ extends React.Component

import React, {Component} from 'react'

export class Profile extends Component {
    /*
    constructor(props) {
        super(props);

        this.state = {
        
        }
    }
    */
    render() {
        const {name, picture, phone, email, address} = this.props.user;
        

        return (
            <>
                <img src = {picture} /> 
                <h1> {name} </h1>
                <h2> {phone}</h2>
                <h2> {email} </h2> 
                <p> {address} </p>
            </>
        )
    }
}
