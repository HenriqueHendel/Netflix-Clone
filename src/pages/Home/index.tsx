import React, {useEffect, useState} from 'react';

import {MoviesList, MovieListProps, getMovieInfo, MovieInfoProps} from '../../utils/tmdb';

import MovieList from '../../components/MovieList';
import FeaturedMovie from '../../components/FeatureMovie';

import {Container, Header, MainMovie, Movies, Footer} from './styles';

const Home: React.FC = ()=>{
    const [moviesList, setMoviesList] = useState<MovieListProps[]>([]);
    const [featuredData, setFeaturedData] = useState<MovieInfoProps>({} as MovieInfoProps);
    const [blackedHeader, setBlackedHeader] = useState(false);

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

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10) {
                setBlackedHeader(true);
            }else {
                setBlackedHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);

        return ()=>{
            window.removeEventListener('scroll', scrollListener);
        }
    }, [])


    console.log(moviesList);

    return (
        <Container>
            <Header blacked={blackedHeader}>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix_Logo"/>
                </a>
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="User_Image"/>
                </a>
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