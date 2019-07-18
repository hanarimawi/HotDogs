import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';


class ManageDog extends Component {
    constructor(props){
        super(props);
        this.state = {
            dog: this.props.dog,
            isDogIn: false 
        }
    }

    setDogOut = () => {
        this.setState({isDogIn: false})
    }

    setDogIn = () => {
        this.setState({isDogIn: true})
    }



    render() {
        return (
            <div className = "manageDog">
                Manage Dog
                <div className ="switchText">
                    Is your dog in the office?
                    <Button disabled={!this.state.isDogIn} onClick={this.setDogOut} className="yesButton"> Yes </Button>
                    <Button disabled={this.state.isDogIn} onClick={this.setDogIn} className="noButton"> No </Button>
                </div>
            </div>
        );
    }
}

export default ManageDog;