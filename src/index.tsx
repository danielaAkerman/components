import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./button";

class Home extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  tick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  render() {
    return (
      <div>
        <Button>{this.state.counter}</Button>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("hello-example"));
