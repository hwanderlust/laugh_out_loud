import React from 'react'
import {fetchTenJokes, fetchRandomJoke} from './adapter'
import FetchButton from './FetchButton'
import Joke from './Joke'

export default class JokeList extends React.Component {
  state = {
    jokes: []
  }

  updateJokes = (jokes) => {
    return this.setState({ jokes: jokes}, () => console.log(this.state))
  }

  renderJokes = () => {
    const jokes = this.state.jokes

    if(!!jokes) {
      if(Array.isArray(jokes)) {
        return jokes.map((joke, idx) => <Joke key={idx} jokes={joke} />)
      } else {
        return <Joke key={jokes.id} jokes={jokes}/>
      }
    }
  }

  handleClick = (name) => {
    if(name === "One") {
      fetchRandomJoke((jokes) => this.updateJokes(jokes))
    } else if(name === "Ten") {
      fetchTenJokes((jokes) => this.updateJokes(jokes))
    }
  }

  render() {
    console.log('rendered');
    return (
      <div className="JokeList">
        <h2>Are you ready to rumbleeeeeeee?!</h2>
        <div className="row">
          <div className="col s2 push-s4">
            <FetchButton name="One" color="pink accent-1" fetchFunction={() => this.handleClick("One")}/>
          </div>
          <div className="col s2 push-s4">
            <FetchButton name="Ten" color="blue darken-1" fetchFunction={() => this.handleClick("Ten")} />
          </div>
        </div>
        <div className="jokes row">
          <div className="col s6 push-s3">
            { this.renderJokes() }
          </div>
        </div>
      </div>
    )
  }
}
