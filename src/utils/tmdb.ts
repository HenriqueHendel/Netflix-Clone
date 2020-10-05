import {api, api_key} from '../services/api';

interface ResultsProps {
    original_name:string;
    poster_path:string;
    id: number;
}

export interface MoviesProps {
    results: ResultsProps[];
}

export interface MovieListProps {
    slug: string;
    title: string;
    filmes: MoviesProps;
}

interface GetMovieInfoProps {
    movieId: number;
    type: string;
}

export interface MovieInfoProps {
    number_of_seasons: number;
}

async function getMovies(endpoint: string){
    const response = await api.get(`${endpoint}`);
    return response.data;
}

export async function MoviesList(): Promise<MovieListProps[]> {
    return [
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            filmes: await getMovies(`/discover/tv?with_network=213&language=pt-BR&api_key=${api_key}`)
        },
        {
            slug:'trending',
            title:'Recomendados para Você',
            filmes: await getMovies(`/trending/all/week?&language=pt-BR&api_key=${api_key}`)
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            filmes: await getMovies(`/movie/top_rated?language=pt-BR&api_key=${api_key}`)
        },
        {
            slug:'Action',
            title:'Ação',
            filmes: await getMovies(`/discover/movie?with_genres=28&language=pt-BR&api_key=${api_key}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            filmes: await getMovies(`/discover/movie?with_genres=35&language=pt-BR&api_key=${api_key}`)
        },
        {
            slug:'horror',
            title:'Terror',
            filmes: await getMovies(`/discover/movie?with_genres=27&language=pt-BR&api_key=${api_key}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            filmes: await getMovies(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${api_key}`)
        },
        {
            slug: 'documentary',
            title:'Documentários',
            filmes: await getMovies(`/discover/movie?with_genres=99&language=pt-BR&api_key=${api_key}`)
        }
    ]
}

export async function getMovieInfo({movieId, type}: GetMovieInfoProps): Promise<MovieInfoProps> {
    let info = {} as MovieInfoProps;

    if(movieId) {
        switch(type){
            case 'movie':
                info = await getMovies(`/movie/${movieId}?language=pt-BR&api_key=${api_key}`)
            break;

            case 'tv':
                info = await getMovies(`/tv/${movieId}?language=pt-BR&api_key=${api_key}`) 
            break;
        }
    }

    return info;
}
