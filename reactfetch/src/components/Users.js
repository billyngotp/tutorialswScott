//React, {Component} from 'react is the same as import React from 'react'
//in the class you need to do class ____ extends Component vs class ____ extends React.Component
import React, {Component} from 'react'

export default class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userList:[]
        };
    }
    
    async componentDidMount() {
        let site = 'http://localhost:3001/api/user';
        let stockapi = "https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=9eLj71kTKY1GKMStdknrBQBJBuphat2OX3qCcWez25RaSuZLoMUkpAEKJUQl" 
        fetch(stockapi)
         .then(response => response.json())
         .then (data => this.setState({ userList:data.data }))
         .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.userList + " is the fetch");
        return (
            <> 
            {this.state.userList.data.map((user,index) => 
            <Profile user = {user} key = {index} /> ) }
            </>
        )
    }
}


const Profile = (props) => {
    //const {name, picture, phone, email, address} = props.user;

    const {data} = props.user;    
    return (
        <>
            <div>
            
                <h2> {data}</h2>
            </div>

            {/*
            <img src = {picture} /> 
            <h1> {name} </h1>
            <h2> {phone}</h2>
            <h2> {email} </h2> 
            <p> {address} </p>
            */}

        </> 
    )
}