import React, { Component } from 'react';
// import './Destination.css';

class Destination extends Component {

  constructor(props) {
    super(props)
    this.handleToggleVisited = this.handleToggleVisited.bind(this)
    this.state = {
      visited: false
    }
  }

  getClassName(visited) {
    return `destination${visited ? ' visited' : ''}`
  }

  handleToggleVisited(event) {
    event.preventDefault()
    this.setState({
      visited: !this.state.visited
    })
  }

  render() {
    const className = this.getClassName(this.state.visited)
    return (
      <li className={className}>
        <span className="city">{this.props.destination.city}</span>
        <a href="#" onClick={this.handleToggleVisited}>toggle</a>
      </li>
    );
  }
}

export default Destination;
