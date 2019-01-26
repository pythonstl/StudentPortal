import React, {Component} from 'react';
import StudentList from './StudentList';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{'paddingTop':'50px'}}>
                <h1 className="text-center" style={{'paddingBottom':'30px'}}>Welcome, {this.props.loggedInUser.firstName}.</h1>
                <StudentList searchResult={this.props.searchResult} reset={this.props.reset} />
            </div>
        );
    }
}