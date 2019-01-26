import React, {Component} from 'react';
import axios from 'axios';
import {Animated} from 'react-animated-css';
import '../css/StudentList.css';

export default class StudentList extends Component {
    constructor(props) {
        super(props); // searchResult from Layout
        this.state = {
            studentList: []
        };
    }

    // Retrieves all of the student objects from Java controller.
    componentDidMount() {
        axios.get('http://localhost:8080/findAllStudents').then(
            response => {
                const students = response.data;
                this.setState({
                    searchResult: null, // HOW/WHY does StudentList have access to this?
                    studentList: students
                })
            }
        )
    }

    render() {
        // * These determine what should be displayed (i.e., one student or all students).
        let display = (
            <Animated animationIn="bounceInRight" animationOut="fadeOutRight" isVisible={true}>
                <div className="container"> 
                    <div className="row">
                        {this.state.studentList.map(student =>
                            <div className="col-md-4">
                                <div className="card mb-3 text-center">
                                    <div className="mx-3">
                                        <h2>{student.firstName} {student.lastName}</h2>
                                        <h4>{student.age} years old</h4>
                                        <h4>{student.telephone}</h4>
                                        <h4>{student.email}</h4>
                                    </div>
                                </div>
                            </div>
                        )} 
                    </div>
                </div>
            </Animated>
        );
        
        // *
        if (this.props.searchResult) {
            display = (
                <Animated animationIn="bounceInLeft" animationOut="fadeOutRight" isVisible={true}>
                    <div className="container"> 
                        <div className="row">   
                            <div className="col-md-4"></div>            
                            <div className="col-md-4">
                                <div className="card mb-3">
                                    <div className="mx-3">
                                        <h2>{this.props.searchResult.firstName} {this.props.searchResult.lastName}</h2>
                                        <h4>{this.props.searchResult.age} years old</h4>
                                        <h4>{this.props.searchResult.telephone}</h4>
                                        <h4>{this.props.searchResult.email}</h4>
                                    </div>
                                </div> 
                            </div>   
                        </div>
                    </div>
                </Animated>
            );
        }

        return (
            <div>
                {display}
            </div>
        );
    }
}