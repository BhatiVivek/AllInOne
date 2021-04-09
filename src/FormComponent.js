import React from "react";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobileNum: ""
    };
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name, this.state.mobileNum);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Enter Name</label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleOnChange}
            />
          </div>
          <div>
            <label>Enter Mobile Number</label>
            <input
              id="mobileNum"
              type="text"
              value={this.state.mobileNum}
              onChange={this.handleOnChange}
            />
          </div>
          <input type="submit" value="Submit Here" />
        </form>
      </div>
    );
  }
}

export default FormComponent;
