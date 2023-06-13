import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding: 40px 50px;
    color: black;
`

export const Logo = styled.img`
    margin: 0;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderDiv = styled.div`
    padding: 180px 100px 0px;
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
    
    @media screen and (max-width: ${({ theme }) => theme.mobile}){
        padding: 180px 30px 0px;
    }

`