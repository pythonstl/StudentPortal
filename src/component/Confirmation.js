import React, {Component} from 'react';
import {Animated} from 'react-animated-css';
import about from '../images/about.png';
import '../css/Confirmation.css';

const Confirmation = (props) => {
    return (
        <div className="container" style={{'paddingTop':'100px'}}>
            <div className="row">
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                    <div className="col-md-6">
                        <img src={about} />
                    </div>
                </Animated>
                <div className="col-md-6">
                <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                    <div style={{paddingTop:'35%'}}>
                        <h1 className="thanksHeading">Thank You!</h1>
                        <h3>You have signed up successfully.</h3>
                    </div>
                </Animated>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;