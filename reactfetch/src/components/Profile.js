//React, {Component} from 'react is the same as import React from 'react'
//in the class you need to do class ____ extends Component vs class ____ extends React.Component

import React, {Component} from 'react'

export class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        //this.prop.user.name
        //this.prop.user.picture
        //this.prop.user.phone
        //this.prop.user.email

        return (
            <>
            </>
        )
    }
}
