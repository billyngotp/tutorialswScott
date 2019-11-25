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
        const stockapi = "https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=9eLj71kTKY1GKMStdknrBQBJBuphat2OX3qCcWez25RaSuZLoMUkpAEKJUQl" 
        fetch(site)
        .then(response => response.json())
        .then (data => this.setState({ userList:data }))
        .catch(err => console.log(err))
    }

    render() {
        //this.state.user.name
        //this.state.user.picture email etc
        console.log(this.state.userList[0]);
        return (
            this.state.userList.map((user,index) => 
            <Profile key = {index} user = {user} /> ) 
        )
    }
}

//export class vs export default
//exporting default means you export the whole thing
//export class allows your to import {}