import styled from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    text-align: justify;
    margin: 0px;
    background-color: ${({layout}) => layout || '#f6fbff'};   
    flex-direction: ${({layout}) => layout || 'row'}; 
    padding: 60px 0px;

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        flex-direction: column-reverse;
    }
    `

export const StyledCardBody = styled.div`
    padding: 0px 80px;
    
    h2{
        padding-bottom: 30px;
    }

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        text-align: center;

        h2{
            padding-top: 30px
        }
    }
    `

export const StyledCardImage = styled.img`
    padding: 50px;
    width: 40%;
    
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        padding: 10px;
        width: 70%;
    }
`