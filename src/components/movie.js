import React, { Component } from 'react'

import axios from 'axios'
import { thisExpression } from '@babel/types'

class Movie extends Component {
  state = {
    movies: []
  }

  getAPI = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=4d1706050da661b62765277b35357cd7'
    )
    const data = await response.data
    this.setState({
      movies: response.data.results
    })
    // console.log(data)
  }

  async componentDidMount() {
    this.getAPI()
  }

  render() {
    console.log(this.state.movies)
    return (
      <main>
        <div className="header-container">
          <h1>Ayyy we're doing a nostalgia ova hea!</h1>
        </div>
        <section className="movies-container">
          <ul>
            {this.state.movies.map(result => {
              return (
                <li key={result.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
                      result['poster_path']
                    }`}
                  />
                  {result.name}
                  {result.title}
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    )
  }
}

export default Movie
