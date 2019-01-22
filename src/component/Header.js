import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    state = {
        email: '',
        password: ''
    };    

    submit = (event) => {
        event.preventDefault();
        this.props.submit(this.state.email, this.state.password);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    signInChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }
    
    render() {
        let links = null;
        let inputFields = <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="search" />
        let signInSignOut = <a onClick={this.props.signOut} className="nav-link">Sign Out</a>
        if (!this.props.loggedInUser) {
            links = (
                <React.Fragment>
                    <Link to="/sign-up">Sign Up</Link>
                </React.Fragment>
            )
            inputFields = (
                <React.Fragment>
                    <div>
                        <input name="email" value={this.state.email} onChange={this.signInChangeHandler} className="margin-5px-right" placeholder="email" />
                        <input name="password" value={this.state.password} onChange={this.signInChangeHandler} placeholder="password" />
                    </div>
                </React.Fragment>
            )
            // Change the onClick event to point to point to this new Submit function.
            signInSignOut = <a onClick={this.submit} className="nav-link" href="#">Sign In</a>
        }
        return (
            <div>
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <Link to='/' className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Student Portal</Link>
                    {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/> */}
                    {inputFields}
                    <Link to="/about-us">About Us</Link>
                    {links}

                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                           {signInSignOut}
                        </li>
                    </ul>
                </nav>

                {/*<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <Link className="navbar-brand" to="/">Student Portal</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sign-out">Sign Out</Link>
                            </li>
                        </ul>
                        //<form className="form-inline mt-2 mt-md-0">
                        //    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        //    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        //</form>
                        <form onSubmit={this.signInSubmitHandler} className="search-bar form-inline mt-2 mt-md-0">
                            <input name="email" value={this.state.value} onChange={this.handleChange} className="form-control mr-sm-2" type="text" placeholder="E-mail" aria-label="email" />
                            <input name="password" value={this.state.value} onChange={this.handleChange} className="form-control mr-sm-2" type="text" placeholder="Password" aria-label="password" />
                            <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Sign In</button>
                        </form>
                    </div>
                </nav>*/}
            </div>
        );
    }
}