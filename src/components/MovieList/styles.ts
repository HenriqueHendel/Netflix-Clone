import styled from 'styled-components';

interface MovieRowListProps {
    scrollX: number;
    widthList: number;
}

export const MovieRow = styled.div`
    & + div {
        margin-top: 30px;
    }

    h2 {
        margin: 0 0 0 30px;
    }

    svg {
        font-size: 50px;
        position: absolute;
        width:40px;
        height:225px;
        z-index:99;
        background-color: rgba(0, 0, 0, .6);
        display:flex;
        align-items:center;
        justify-content:center;
        overflow:hidden;
        cursor: pointer;
        opacity: 0;
        
        transition: opacity ease 0.5s;
    }

    &:hover {
        svg {
            opacity: 1;
        }
    }
`;

export const MovieRowListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

export const MovieRowList = styled.div<MovieRowListProps>`
    width: ${props => props.widthList}px;
    margin-left: ${props => props.scrollX}px;

    transition: all ease 0.5s;
`;

export const MovieRowItem = styled.div`
    display: inline-block;
    width: 150px;   
    cursor: pointer;
    
    img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s; 

        &:hover {
            transform: scale(1);
        }
    }
`;

export const MovieRowLeft = styled.div`
    svg {
        left:0;
    }
`;

export const MovieRowRight = styled.div`
    svg {
        right:0;
    }
`;