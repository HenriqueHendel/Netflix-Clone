import styled from 'styled-components';

interface HeaderProps {
    blacked: boolean;
}

export const Container = styled.div``;

export const Header = styled.div<HeaderProps>`
    position: fixed;
    z-index: 999;
    top:0;
    left:0;
    right:0;
    height: 70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 30px;
    transition: background-color ease 0.5s;


    background: ${props => props.blacked ? '#000' : 'transparent'};


    a:first-child {
        height: 25px;

        img {
            height: 100%;
        }
    }

    a + a {
        height:35px;

        img {
            height: 100%;
            border-radius: 3px;
        }
    }
`;

export const Movies = styled.section`
    margin-top: -100px;
`;

export const Footer = styled.footer`
    margin: 50px 0;
    text-align:center;

    a {
        text-decoration:none;
        color: #E50914;
    }
`;

export const Loading = styled.div`
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    z-index: 99;
    display:flex;
    justify-content:center;
    align-items:center;
`;