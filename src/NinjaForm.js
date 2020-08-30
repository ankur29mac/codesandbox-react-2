import React, { Component } from "react";

class NinjaForm extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="name" /> Name:
          <input type="text" id="name" onChange={this.changeHandler} />
          <label htmlFor="age" /> Age:
          <input type="text" id="age" onChange={this.changeHandler} />
          <label htmlFor="belt" /> Belt:
          <input type="text" id="belt" onChange={this.changeHandler} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NinjaForm;
