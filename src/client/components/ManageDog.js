import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class ManageDog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: this.props.dog,
      isDogIn: this.props.dog.is_in
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ dog: nextProps.dog });
    this.setState({ isDogIn: nextProps.dog.is_in });
  }

  setDogOut = () => {
    this.setState({ isDogIn: false }, () => {
      this.updateStatus(false);
    });
    this.props.handler(false);
  };

  setDogIn = () => {
    this.setState({ isDogIn: true }, () => {
      this.updateStatus(true);
    });
    this.props.handler(true);
  };

  updateStatus = (val) => {
    let dogStatus = 'I am out';
    if (val) {
      dogStatus = 'I am in!';
    }
    let updatedDog = this.state.dog;
    updatedDog.status = [dogStatus];
    updatedDog.is_in = val;
    axios.put('api/dogs/' + this.state.dog._id, updatedDog)
      .then((response) => {
        this.setState({ dog: response.data.data });
        this.props.dogStateHandler(response.data.data);
      });
  };

  render() {
    return (
      <div className="manageDog">
        <h3>Manage Dog</h3>
        <hr></hr>
        <div className="switchText">
          <p>Is your dog in the office?</p>
          <Button disabled={this.state.isDogIn} onClick={this.setDogIn}
                  className="yesButton"> Yes </Button>
          <Button disabled={!this.state.isDogIn} onClick={this.setDogOut}
                  className="noButton"> No </Button>
        </div>
      </div>
    );
  }
}

export default ManageDog;
