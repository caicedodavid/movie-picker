import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import './MovieItem.css';

function MovieItem(props) {
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={props.eventKey} className="movie-item">
                <img src={props.movie.Poster} alt='movie'/>
                <div className="movie-title">
                    <h3>{props.movie.Title}</h3>
                    <h5>{props.movie.Year}</h5>
                </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={props.eventKey}>
                <Card.Body>Description</Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default MovieItem;
