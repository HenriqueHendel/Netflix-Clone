import React, {useEffect, useState} from 'react';

import ReactLoading from 'react-loading';

import {MoviesList, MovieListProps, getMovieInfo, MovieInfoProps} from '../../utils/tmdb';

import MovieList from '../../components/MovieList';
import FeaturedMovie from '../../components/FeatureMovie';

import {Container, Header, Movies, Footer, Loading} from './styles';

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
                Clone da interface feita por <a href="https://www.linkedin.com/in/henriquehendellopes" rel="noopener noreferrer" target="_blank"><strong>Henrique Hendel Santos Lopes</strong></a> <br/>
                Direitos de imagem para a <a href="https://www.netflix.com/" rel="noopener noreferrer" target="_blank"><strong>Netflix</strong></a> <br/>
                Dados dos filmes pegos do site <a href="https://www.themoviedb.org/" rel="noopener noreferrer" target="_blank"><strong>Themoviedb.org</strong></a> <br/>
            </Footer>

            {moviesList.length <= 0 && 
                <Loading>
                    <ReactLoading type="spin" color="#E50914" />
                </Loading>               
            }

        </Container>
    );
}

export default Home;