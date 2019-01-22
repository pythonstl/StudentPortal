import React, {Component} from 'react';
import Header from '../Header';
import SignUp from '../SignUp';
import {Route, withRouter} from 'react-router-dom';
import AboutUs from '../AboutUs';
import Home from '../Home';
import Confirmation from '../Confirmation';
import axios from 'axios';
import ThankYou from '../Confirmation';

class Layout extends Component {
    state = {
        loggedInUser: null
    }

    signOut = () => {
        this.setState({
            loggedInUser: null
        })
        this.props.history.push('/');
    }

    signInSubmitHandler = (email, password) => {
        // LOGIC TO MAKE API CALLS TO BACK SYSTEM

        // LOGIC TO CALL JAVA API
        const student = {
            email: email,
            password: password
        }
        axios.post('http://localhost:8080/login', student).then(
            (response) => {
                if (response.data) {
                    this.setState(
                        {
                            loggedInUser: response.data
                        }
                    )
                    this.props.history.push('/');
                }
            })
    }

    render() {
        // THESE JUST DETERMINE WHAT THE HOME URLs SHOULD BE, IF LOGGED IN. 
        // MUST STILL USE LOGIC TO RE-DIRECT.

        let routes = (
            <React.Fragment>
                <Route exact path='/sign-up' component={SignUp} />
                <Route exact path='/' component={SignUp} />
                <Route exact path='/thank-you' component={ThankYou} />
            </React.Fragment>
        )

        if (this.state.loggedInUser) {
            routes = (
                <React.Fragment>
                    <Route exact path='/home' render={(props) => (<Home {...props} loggedInUser={this.state.loggedInUser} />)} />
                    <Route exact path='/' render={(props) => (<Home {...props} loggedInUser={this.state.loggedInUser} />)} />
                </React.Fragment>
            )
        }

        return (
            <div>
                <Header signOut={this.signOut} submit={this.signInSubmitHandler} loggedInUser={this.state.loggedInUser} />
                <Route exact path='/about-us' component={AboutUs} />
                {routes}              
            </div>
        );
    }
}

export default withRouter(Layout);