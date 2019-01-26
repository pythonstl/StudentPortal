import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            query: ''
        }; 
        //this.handleChange = this.handleChange.bind(this);
        //this.handleSearchEnter = this.handleSearchEnter.bind(this);
    }

    // Collects the value of user's query for further action.
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    // Sign in.
    submit = (event) => {
        event.preventDefault();
        const em = this.state.email;
        const pa = this.state.password;
        this.setState({ // Prevents e-mail from appearing after sign-out.
            email: null,
            password: null
        });
        this.props.submit(em, pa);
    }

    // If the user hits the 'Enter' key, then Layout.searchSubmitHandler is called via search().
    handleSearchEnter = (event) => {
        if (event.key === 'Enter') {
            this.search(this.state.query);
        }
    }

    // Searches via Layout.searchSubmitHandler.
    search = (emailAddress) => {
        this.props.search(emailAddress);
    }
    
    render() {
        let links = null;

        /* Search Bar */
        let inputFields = <input name="query" value={this.state.query} onChange={this.handleChange} onKeyPress={this.handleSearchEnter} className="form-control-dark w-100" type="text" placeholder="Search" aria-label="search" />

        /* Sign Out */
        let signInSignOut = <a onClick={this.props.signOut} className="nav-link text-light">Sign Out</a>
        if (!this.props.loggedInUser) {
            links = (
                <React.Fragment>
                    <Link to="/sign-up" className="nav-link text-light">Sign Up</Link>
                </React.Fragment>
            )
            inputFields = (
                <React.Fragment>
                    <div>
                        <input name="email" value={this.state.email} onChange={this.handleChange} className="margin-5px-right" placeholder="email" required />
                        <input name="password" value={this.state.password} onChange={this.handleChange} className="" placeholder="password" type="password" required />
                    </div>
                </React.Fragment>
            )

            /* Sign In or Sign Out, depending. */
            signInSignOut = <a onClick={this.submit} className="nav-link text-light" href="#">Sign In</a>
        }
        return (
            <div>
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <Link to='/' className="navbar-brand col-sm-3 col-md-2 mr-0 text-light" href="#">Student Portal</Link>
                    {/* Search Bar */}
                    {inputFields}
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                           {signInSignOut}
                        </li>
                    </ul>
                    {links}
                    <Link to="/about-us" className="nav-link text-light">About</Link>
                </nav>
            </div>
        );
    }
}