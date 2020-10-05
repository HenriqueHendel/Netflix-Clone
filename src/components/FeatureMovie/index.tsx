import React from 'react';

import {MovieInfoProps} from '../../utils/tmdb';

interface FeaturedMovieProps {
    item: MovieInfoProps
}

const FeaturedMovie: React.FC<FeaturedMovieProps> = ()=>{
    return (
        <h1>Henrique</h1>
    );
}

export default FeaturedMovie;