import styled from 'styled-components';

export const MovieRow = styled.div`
    & + div {
        margin-top: 30px;
    }

    h2 {
        margin: 0 0 0 30px;
    }
`;

export const MovieRowListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

export const MovieRowList = styled.div`
    width: 99999999999px;
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