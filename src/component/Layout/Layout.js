import React, {Component} from 'react';
import Header from '../Header';
import SignUp from '../SignUp';
import {Route, withRouter} from 'react-router-dom';
import AboutUs from '../AboutUs';
import Home from '../Home';
import Confirmation from '../Confirmation';
import axios from 'axios';

class Layout extends Component {
    state = {
        loggedInUser: null,
        searchResult: {email:'', password:'', firstName:'', lastName:'', telephone:'', age:''}
    }

    // Resets the values of loggedInUser and searchResult.
    signOut = () => {
        this.setState({
            loggedInUser: null,
            searchResult: null
        })
        this.props.history.push('/');
    }

    // Resets search result, as precaution, and assigns value to loggedInUser. 
    signInSubmitHandler = (email, password) => {
        this.setState({
            searchResult: null
        })
        const student = {
            email: email,
            password: password
        }
        axios.post('http://localhost:8080/login', student).then(
            response => {
                if (response.data) {
                    this.setState({
                        loggedInUser: response.data
                    });    
                    this.props.history.push('/');
                }
            }
        )
    }

    // Search Bar: Calls Java get method and assigns value to searchResult, if object exists.
    searchSubmitHandler = (emailQuery) => {
        axios.get('http://localhost:8080/findStudentById?email=' + emailQuery).then(
            response => {
                if (response.data) {
                    this.setState({
                        searchResult: response.data
                    });
                    this.props.history.push('/');
                }
                else {
                    this.setState({
                        searchResult: null // Display all students if no result was found.
                    });
                }
            }
        )
    }

    render() {
        // * These determine what the URLs in the Header component should be.
        let routes = (
            <React.Fragment>
                <Route exact path='/sign-up' component={SignUp} />
                <Route exact path='/' component={SignUp} />
                <Route exact path='/confirmation' component={Confirmation} />
            </React.Fragment>
        )
        // *
        if (this.state.loggedInUser) {
            routes = (
                <React.Fragment>
                    <Route exact path='/home' render={(props) => (<Home {...props} loggedInUser={this.state.loggedInUser} searchResult={this.state.searchResult} />)} />
                    <Route exact path='/' render={(props) => (<Home {...props} loggedInUser={this.state.loggedInUser} searchResult={this.state.searchResult} />)} />
                    {/*<Route exact path='/students' render={(props) => (<StudentList {...props} loggedInUser={this.state.loggedInUser} />)} />*/}
                </React.Fragment>
            )
        }

        return (
            <div>
                <Header signOut={this.signOut} submit={this.signInSubmitHandler} loggedInUser={this.state.loggedInUser} search={this.searchSubmitHandler} reset={this.reset} />
                <Route exact path='/about-us' component={AboutUs} />
                {routes}              
            </div>
        );
    }
}

export default withRouter(Layout);