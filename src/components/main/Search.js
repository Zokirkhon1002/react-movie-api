import React, { Component } from "react";

export default class Search extends Component {
  state = {
    search: "panda",
    type: "all",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(()=> ({type: e.target.dataset.type}), () => {
      this.props.searchMovies(this.state.search, this.state.type)
    });
  };

  render() {
    const { search, type } = this.state;
    const { handleFilter, handleKey } = this;
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              id="email_inline"
              type="search"
              placeholder="Search"
              className="validate"
              value={search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={handleKey}
            />
            <button
              onClick={() => this.props.searchMovies(search, type)}
              className="btn btn-outline-info"
            >
              Search
            </button>
          </div>
        </div>

        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={handleFilter}
              checked={type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={handleFilter}
              checked={type === "movie"}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={handleFilter}
              checked={type === "series"}
            />
            <span>series</span>
          </label>
        </div>
      </div>
    );
  }
}
