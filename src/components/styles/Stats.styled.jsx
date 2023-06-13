import styled from 'styled-components';

export const StyledStats = styled.div`
    display: flex;
    padding: 0px 200px;
    h1{
        font-size: 4rem;
    }
    
    p{
        text-align: center;
        color: #899198;
    }

    img{
        width: 40px;
    }

    div{
        padding-top: 60px;
    }

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
    }
`
