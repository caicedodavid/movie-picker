import React, {Fragment} from 'react';
import Lookup from './Lookup/Lookup';
import axios from 'axios';
import './Movies.css';
import MoviesList from "./MovieList/MoviesList";

class Movies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    searchMovies(query) {
        axios.get(process.env.REACT_APP_API_URL, {params: {s: query}})
            .then(res => {
                this.setState({movies: res.data.Search, totalMovies: res.data.totalResults});
            });
    }

    render() {
        return (
            <Fragment>
                <Lookup onClick={(query) => this.searchMovies(query)}/>
                <MoviesList movies={this.state.movies}/>
            </Fragment>
        )
        ;
    }
}

export default Movies;