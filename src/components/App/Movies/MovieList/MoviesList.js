import React from 'react';
import './MoviesList.css';
import MovieItem from "./MovieItem/MovieItem";
import Accordion from 'react-bootstrap/Accordion';


class MoviesList extends React.Component {

    render() {
        const movies = this.props.movies.map((movie, step) => {
            return (
                <MovieItem key={movie.imdbID} movie={movie} eventKey={step}/>
            );
        });
        return (
            <Accordion>
                {movies}
            </Accordion>
        );
    }
}

export default MoviesList;