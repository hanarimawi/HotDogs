import React, { Component } from 'react';

class DogStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: this.props.dog,
    };
  }

  render() {
    return (
      <div className="dogStatus">
        {this.state.dog.is_in ? 'I\'m in!' : 'I\'m out'}
      </div>
    );
  }
}

export default DogStatus;
