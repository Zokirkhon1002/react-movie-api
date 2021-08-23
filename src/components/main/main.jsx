import React, { Component } from "react";
import Loader from "./loader";
import Movies from "./Movies";
import Search from "./Search";

export default class Main extends Component {
    state = {
        movies: [],
        loading: true,
        }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=34c04d3a&s=panda')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovies = (searchContent, type = 'all') => {
      this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=34c04d3a&s=${searchContent}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }


  render() {
      const { movies, loading } = this.state;
    return (
      <div className="container content">
          <Search searchMovies={this.searchMovies} />
          {loading ? <Loader /> :(<Movies movies={movies}/>)}
        
      </div>
    );
  }
}
