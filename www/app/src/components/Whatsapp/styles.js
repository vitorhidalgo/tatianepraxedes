import styled from 'styled-components';

export const Link = styled.a`
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 20px; right: 20px;
    z-index: 10;
    border-radius: 50%;
    background-color: #009933;
    box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.5);
    transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550);

    i {
        width: 60%;
        margin: 0 auto;
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $white;
        font-size: 50px;
    }

    @media only screen and (max-width: 600px){
        bottom: 10px;
        right: 10px;
    }
`;
