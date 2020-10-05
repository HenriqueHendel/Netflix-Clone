import React, {useEffect, useState} from 'react';

import getMovies, {MovieListProps} from '../../utils/tmdb';

import {Container, Header, MainMovie, Movies, Footer} from './styles';

const Home: React.FC = ()=>{
    const [movieList, setMovieList] = useState<MovieListProps[]>([]);

    useEffect(()=>{
        const loadAll = async ()=>{
            let list = await getMovies();
            setMovieList(list);   
        }

        loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Header>

            </Header>

            <MainMovie>

            </MainMovie>

            <Movies>

            </Movies>

            <Footer>
                
            </Footer>

        </Container>
    );
}

export default Home;