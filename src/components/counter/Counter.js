import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, valueToSet: 0, movies: [] };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }



  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  componentWillUnmount() {
      clearInterval(this.timerID)
  }

  getMovies = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
        this.setState({
            movies: json
        })
    })
  }

  


  changeCounter = () => {
    this.setState({
      counter: this.state.counter + this.state.valueToSet}
    );
  }


  changeValueToSet = (event) => {
      this.setState({
          valueToSet: event.target.value
      })
  }

  render() {
    return <div>
        <button onClick={this.changeCounter}> Change </button>
        <button onClick={this.getMovies}> Get mOvies </button>
        <input onChange={this.changeValueToSet} value={this.state.valueToSet} /> 
        {this.state.counter}

        {this.state.movies.map((movie) => <p key={movie.id}> {movie.title} </p>)}
        </div>;
  }
}
