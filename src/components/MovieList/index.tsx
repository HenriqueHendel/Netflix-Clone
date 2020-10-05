import React from 'react';

import {MovieRowListArea} from './styles';

import {MoviesProps} from '../../utils/tmdb';

interface MovieListProps {
    key: number;
    title:string;
    slug:string;
    movies: MoviesProps;
}

const MovieList: React.FC<MovieListProps> = ({title, movies})=>{
    return(
        <div>
            <h2>{title}</h2>

            <MovieRowListArea>
                {movies.results.length > 0 && movies.results.map((item, key)=>(
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_name}/>
                ))}
            </MovieRowListArea>
        </div>
    );
}

export default MovieList;