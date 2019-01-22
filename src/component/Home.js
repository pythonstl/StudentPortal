import React, {Component} from 'react';

export default class Home extends Component {
    render() {
        return (
            <div style={{'paddingTop':'50px'}}>
                <h1>HOME: Welcome, {this.props.loggedInUser.firstName}.</h1>
                <p>Welcome!</p>
            </div>
        );
    }
}