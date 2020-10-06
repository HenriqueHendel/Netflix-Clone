import React, {useEffect, useState} from 'react';

import {MovieInfoProps} from '../../utils/tmdb';

import {Featured, FeaturedVertical, FeaturedHorizontal, Title, FeaturedInfo, FeaturedDescription, FeaturedButtons, FeaturedGenres} from './styles';

interface FeaturedMovieProps {
    item: MovieInfoProps
}

const FeaturedMovie: React.FC<FeaturedMovieProps> = ({item})=>{
    const [firstDate, setFirstDate] = useState(0);
    const [genres, setGenres] = useState<string[]>([])

    useEffect(()=>{

        const getInitialData = ()=>{
            const date = new Date(item.first_air_date).getFullYear()

            const initialGenres = [];
        
            for(let i in item.genres) {
                initialGenres.push(item.genres[i].name)
            }

            setFirstDate(date);
            setGenres(initialGenres);
        } 

        getInitialData();

        
    }, [item.first_air_date, item.genres]);

    return (
        
        <Featured Backdrop_url={item.backdrop_path}>
            <FeaturedVertical>
                <FeaturedHorizontal>
                    <Title>{item.original_name}</Title>
                    <FeaturedInfo>
                        <span>{item.vote_average} pontos</span>
                        <span>{firstDate}</span>
                        <span>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</span>
                    </FeaturedInfo>
                    <FeaturedDescription>
                        {item.overview}
                    </FeaturedDescription>
                    <FeaturedButtons>
                        <a href={`/watch/${item.id}`}>Assistir</a>
                        <a href={`/list/add/${item.id}`}>+ Minha Lista</a>
                    </FeaturedButtons>
                    <FeaturedGenres>
                        <strong>Gêneros: </strong> {genres.join(", ")}
                    </FeaturedGenres>
                </FeaturedHorizontal>
            </FeaturedVertical>
        </Featured>
    );
}

export default FeaturedMovie;