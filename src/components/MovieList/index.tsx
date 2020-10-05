import React from 'react';

import {MovieRow, MovieRowListArea, MovieRowList, MovieRowItem} from './styles';

import {MoviesProps} from '../../utils/tmdb';

interface MovieListProps {
    key: number;
    title:string;
    slug:string;
    movies: MoviesProps;
}

const MovieList: React.FC<MovieListProps> = ({title, movies})=>{
    return(
        <MovieRow>
            <h2>{title}</h2>

            <MovieRowListArea>
                <MovieRowList> 
                    {movies.results.length > 0 && movies.results.map((item, key)=>(
                        <MovieRowItem key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_name}/>
                        </MovieRowItem>
                    ))}
                </MovieRowList>
            </MovieRowListArea>
        </MovieRow>
    );
}

export default MovieList;