import styled from 'styled-components';

export const Button = styled.button`
    padding: ${({pY, pX}) => (pY && pX ? `${pY} ${pX}` : '10px 30px')};
    border: 1px solid #fd53c0;
    border-radius: 50px;
    margin: 0;
    background-color: ${({ bg }) => bg || '#fff'};
    color: ${({ color }) => color || '#fd53c0'};
    font-weight: ${({ fontweight }) => fontweight || 'regular'};
    box-shadow: 0 0 7px rgba(253, 83, 191, 0.443);
    
    &:hover{
        cursor: pointer;
        opacity: 0.9;
        transform: scale(0.95);
        transition: 0.3s ease-out;
        background-color: ${({ hoverbg }) => hoverbg || '#fff'};
        color: ${({ hovercolor }) => hovercolor || '#fd53c0'};
        border-color: ${({ hoverborder }) => hoverborder || '#fd53c0'};
        
    }
`