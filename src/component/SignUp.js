import React, {Component} from 'react';
import '../css/SignUp.css';
import axios from 'axios';

export default class SignUp extends Component {

    state = {
        firstName:'',
        lastName:'',
        age:'',
        telephone:'',
        email:'',
        password:'',
    };

    signUpChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    signUpSubmitHandler = (event) => {
        event.preventDefault();
        
        // LOGIC TO CALL JAVA API
        const student = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            telephone: this.state.telephone,
            email: this.state.email,
            password: this.state.password
        };

        axios.post("http://localhost:8080/submitStudentDetails", student).then( 
            (response) => { 
                this.props.history.push('/thank-you')
            }
        )

        alert("User added!");
    }

    render() {
        return (
            <div style={{'paddingTop':'50px'}}>
                <div className="container">
                    <div className="col-md-6 mx-auto text-center">
                        <div className="header-title">
                            <h1 className="wv-heading--title">
                                Sign up — it’s free!
                            </h1>
                            <h2 className="wv-heading--subtitle">
                                Lorem ipsum dolor sit amet! Neque porro quisquam est qui do dolor amet, adipisci velit...
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <div className="myform form ">
                                <form onSubmit={this.signUpSubmitHandler} name="signUp">
                                    <div className="form-group">
                                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.signUpChangeHandler} className="form-control" id="firstName" placeholder="First Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.signUpChangeHandler} className="form-control" id="lastName" placeholder="Last Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="age" value={this.state.age} onChange={this.signUpChangeHandler} className="form-control" id="age" placeholder="Age" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="telephone" value={this.state.telephone} onChange={this.signUpChangeHandler} className="form-control" id="telephone" placeholder="Telephone" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="email" value={this.state.email} onChange={this.signUpChangeHandler} className="form-control" id="email" placeholder="E-mail" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="password" value={this.state.password} onChange={this.signUpChangeHandler} className="form-control" id="password" placeholder="Password" />
                                    </div>

                                    <div className="text-center ">
                                        <button type="submit" className=" btn btn-block send-button tx-tfm">Create Your Free Account</button>
                                    </div>
                                    <div className="col-md-12 ">
                                        <div className="login-or">
                                            <hr className="hr-or" />     
                                        </div>
                                    </div>
                                        <p className="small mt-3">By signing up, you are indicating that you have read and agree to the <a href="#" className="ps-hero__content__link">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                                        </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}