import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;


    @media screen and (max-width: ${({ theme }) => theme.mobile}){
        flex-direction: column;
        text-align: center;
    }
`