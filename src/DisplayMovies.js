import React from 'react'
import Movie from './Movie'
import { Card } from 'semantic-ui-react'


export default class DisplayMovies extends React.Component{



    render(){
        return (
            
            <Card.Group itemsPerRow={4}>
                {this.props.MovieList.map(movie => (this.props.movieFilter=="" || movie.year==this.props.movieFilter) ? <Movie movie={movie}/> : null)}
            </Card.Group>
        )
    }

}