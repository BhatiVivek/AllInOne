import React from "react";

const HOC = (WrappedComponent) => {
  class NewComponent extends React.Component {
    render() {
      console.log("porps", this.props);
      return (
        <div style={{ color: "red" }}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
  return NewComponent;
};

export default HOC;
