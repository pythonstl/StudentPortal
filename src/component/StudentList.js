import React, {Component} from 'react';
import axios from 'axios';

export default class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [{email:'',password:'',firstName:'',lastName:'',telephone:'',age:''}]
        };
    }

    componentDidMount() {
        axios.get('https://localhost:8080/findAllStudents').then( res => {
            console.log(res);
            this.setState({students: res})
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.students.map(student => <li>{student.firstName}</li>)}
                </ul>
            </div>
        );
    }
}
