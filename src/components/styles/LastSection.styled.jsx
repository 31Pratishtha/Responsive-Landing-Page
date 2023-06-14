import styled from 'styled-components';

export const LastSection = styled.header`
    padding: 70px;
    color: black;
`

export const HeaderDiv = styled.div`
    text-align: center;

    h1{
        padding-bottom: 20px;
        
        @media screen and (max-width: ${({ theme }) => theme.mobile}){
            padding-bottom: 30px;
        }
    }
    
    p{
        padding: 0px 220px 20px; 

        @media screen and (max-width: ${({ theme }) => theme.mobile}){
            padding: 0px 7px 30px;
        }
    }
    

`