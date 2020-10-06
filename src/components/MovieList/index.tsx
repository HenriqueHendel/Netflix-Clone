import React, {useState, useCallback} from 'react';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {MovieRow, MovieRowListArea, MovieRowList, MovieRowItem, MovieRowLeft, MovieRowRight} from './styles';

import {MoviesProps} from '../../utils/tmdb';

interface MovieListProps {
    key: number;
    title:string;
    slug:string;
    movies: MoviesProps;
}

const MovieList: React.FC<MovieListProps> = ({title, movies})=>{
    const [scrollX, setScrollX] = useState(-400);

    const widthList = movies.results.length * 150;

    const handleLeftArrow = useCallback(()=>{
        let x = scrollX + Math.round(window.innerWidth / 2);

        if(x>0){
            x=0;
        }        

        setScrollX(x);

    }, [scrollX])

    const handleRightArrow = useCallback(()=>{
        let x = scrollX - Math.round(window.innerWidth / 2);

        let ListWidth = movies.results.length * 150;

        if((window.innerWidth - ListWidth > x)){
            x = window.innerWidth - ListWidth - 60;
        }

        setScrollX(x);
    }, [movies.results.length, scrollX])

    return(
        <MovieRow>
            <h2>{title}</h2>

            <MovieRowLeft onClick={handleLeftArrow}>
                <NavigateBeforeIcon />
            </MovieRowLeft>

            <MovieRowRight onClick={handleRightArrow}>
                <NavigateNextIcon />
            </MovieRowRight>

            <MovieRowListArea>
                <MovieRowList scrollX={scrollX} widthList={widthList}> 
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