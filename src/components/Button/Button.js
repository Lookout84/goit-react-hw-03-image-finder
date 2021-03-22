import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button className="Button" type="button" onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

export default Button;
