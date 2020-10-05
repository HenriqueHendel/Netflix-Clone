import React, {useEffect, useState} from 'react';

import getMovies, {MovieListProps} from '../../utils/tmdb';

import MovieList from '../../components/MovieList';

import {Container, Header, MainMovie, Movies, Footer} from './styles';

const Home: React.FC = ()=>{
    const [moviesList, setMoviesList] = useState<MovieListProps[]>([]);

    useEffect(()=>{
        const loadAll = async ()=>{
            let list = await getMovies();
            setMoviesList(list);   
        }

        loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(moviesList);

    return (
        <Container>
            <Header>

            </Header>

            <MainMovie>

            </MainMovie>

            <Movies>
                {moviesList.map((item, key)=>(
                    <MovieList key={key} title={item.title} slug={item.slug} movies={item.filmes}/>
                ))}
            </Movies>

            <Footer>
                
            </Footer>

        </Container>
    );
}

export default Home;