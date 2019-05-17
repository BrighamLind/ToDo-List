import React, { Component } from "react";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          onClick={() => this.setState({ done: !this.state.done })}
        />
        <p className={this.state.done ? "done" : null}>{this.props.title}</p>
      </div>
    );
  }
}
