import styled from 'styled-components';
import {shade} from 'polished';

interface FeaturedProps {
    Backdrop_url: string;
}

export const Featured = styled.section<FeaturedProps>`
    height: 100vh;

    background-image: url('https://image.tmdb.org/t/p/original${props => props.Backdrop_url}') ;
    background-position: center; 
    background-size: cover;

    @media(max-width:760px) {
        height: 90vh;
    }

`;

export const FeaturedVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const FeaturedHorizontal = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 30px;
    padding-bottom: 150px;
    padding-top: 70px;

    background: linear-gradient(to right, #111 30%, transparent 70%);
`;

export const Title = styled.h1`
    font-size: 60px;
    font-weight: bold;
    margin-bottom:0;

    @media(max-width:760px) {
        font-size: 40px;
    }
`;

export const FeaturedInfo = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top:15px;

    span:first-child {
        color: #36d369;
    }

    span + span {
        margin-left: 15px;
    }

    @media(max-width:760px) {
        font-size: 16px;
    }
`;

export const FeaturedDescription = styled.div`
    margin-top:15px;
    font-size:20px;
    color:#999;
    max-width: 40%;

    @media(max-width:760px) {
        font-size: 14px;
        max-width: 100%;
        margin-right:30px;
    }
`;

export const FeaturedButtons = styled.div`
    margin-top: 15px;

    a {
        font-size: 20px;
        font-weight: bold;
        padding: 12px 25px;
        border-radius: 5px;
        text-decoration: none;
        display: inline-block;

        @media(max-width:760px) {
            font-size: 16px;
        }   
    }

    a:first-child {
        background-color: #fff;
        color: #000;
        transition: background-color 0.2s;

        &:hover {
            background-color: ${shade(0.2, '#fff')};
        }
    }

    a + a {
        margin-left: 10px;
        background-color: #333;
        color: #fff;
        transition: background-color 0.2s;

        &:hover {
            background-color: ${shade(0.2, '#333')};
        }
    }
`;

export const FeaturedGenres = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #999;

    @media(max-width:760px) {
        font-size: 14px;
    }
`;