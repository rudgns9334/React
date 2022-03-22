import { Component } from 'react';

class Content extends Component {
    render() {
      return (
        <header>
          <h1>{this.props.title}</h1>
          {this.props.desc}
        </header>
      )
    }
  }

export default Content;