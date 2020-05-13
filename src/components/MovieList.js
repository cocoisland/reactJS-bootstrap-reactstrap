import React, {useState, useEffect }from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import {Container, Row} from 'reactstrap'; //reactstrap layout

export default function MovieList() {
    const [films, setFilms] = useState([]);

    useEffect( () => {
        axios
        .get('https://ghibliapi.herokuapp.com/films/')
        .then(response => {
            setFilms(response.data);
            console.log(response.data);
        })
        .catch(err => {
            console.log('The data has not returned', err)
        });
    }, [])

    return (
        <Container>
            <Row>
            {films.map(film => {
                return <MovieCard film={film} key={film.id} />
            })}
            </Row>
        </Container>
    );
}