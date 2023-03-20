import React from "react";
import ReactDOM from "react-dom";

export class Button extends React.Component<any, any> {
  render() {
    return <button style={{ backgroundColor: "green" }}>{this.props.children}</button>;
  }
}
