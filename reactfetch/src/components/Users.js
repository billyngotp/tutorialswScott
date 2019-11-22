//React, {Component} from 'react is the same as import React from 'react'
//in the class you need to do class ____ extends Component vs class ____ extends React.Component

import React, {Component} from 'react'
import {Profile} from "./Profile"

export class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userList:[]
        };
    }

    
    componentDidMount() {
        let site = 'http://localhost:3001/api/user';
        
        fetch(site)
        .then(response => response.json())
        .then (data => this.setState({ userList:data }))
    }

    render() {
        //this.state.user.name
        //this.state.user.picture email etc
        console.log(this.state.userList[0]);
        return (
            this.state.userList.map(user => <Profile user = {user} /> ) 
        )
    }
}

//export class vs export default
//exporting default means you export the whole thing
//export class allows your to import {}