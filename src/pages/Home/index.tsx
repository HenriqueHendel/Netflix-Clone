import React, {useEffect, useState} from 'react';

import {MoviesList, MovieListProps, getMovieInfo, MovieInfoProps} from '../../utils/tmdb';

import MovieList from '../../components/MovieList';
import FeaturedMovie from '../../components/FeatureMovie';

import {Container, Header, MainMovie, Movies, Footer} from './styles';

const Home: React.FC = ()=>{
    const [moviesList, setMoviesList] = useState<MovieListProps[]>([]);
    const [featuredData, setFeaturedData] = useState<MovieInfoProps>({} as MovieInfoProps);

    useEffect(()=>{
        const loadAll = async ()=>{
            let list = await MoviesList();
            setMoviesList(list);   

            let originals = list.filter(i => i.slug === 'originals');
            let random = Math.floor(Math.random()* (originals[0].filmes.results.length - 1));
            let chosenMovie = originals[0].filmes.results[random];
            let chosenInfo = await getMovieInfo({movieId: chosenMovie.id, type:'tv'});

            setFeaturedData(chosenInfo);
        }

        loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(moviesList);

    return (
        <Container>
            <Header>

            </Header>

            {featuredData && 
                <FeaturedMovie item={featuredData} />
            }

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