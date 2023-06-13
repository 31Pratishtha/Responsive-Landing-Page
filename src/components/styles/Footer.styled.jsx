import styled from 'styled-components';
import React from 'react';

export const StyledFooter = styled.div`
    display: flex;
    align-items: top;
    text-align: justify;
    margin: 0px;
    background-color: #01262f;   
    padding-top: 60px;
    color: white;
    gap: 70px;

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        flex-direction: column-reverse;
    }
`

export const StyledContact = styled.div`
    width: 50%;
    padding: 50px;

    .whiteLogo{
        padding-bottom: 30px
    }

    img{
        margin: 0px;
    }

    p{
        margin: 0px
    }

    .contact{
        display: flex;
        gap: 20px;
        padding-bottom: 10px;
    }

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        width: 100%;
    }
`
export const StyledNewsletter = styled.div`
    width: 50%;
    padding: 50px;

    h1{
        font-weight: 500;
        font-size: 1.5rem;
        padding-bottom: 30px;
    }

    p{
        padding-bottom: 30px
    }

    form{
        display: flex;
        gap: 30px;
    }

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        width: 100%;
        form{
            flex-direction: column;
            gap: 10px;
        }
    }
    `

export const handleEmailSubmit = (e) => {
    e.preventDefault();
}

export const EmailInput = styled.input`
    margin: 0;
    width: 250px;
    padding: 10px 10px;
    border-radius: 5px;
    border: 1px solid #fff;

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        width: 100%;
    }
`

export const SubmitButton = styled.button`
    padding: 10px 30px;
    border: 1px solid #fd53c0;
    border-radius: 5px;
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

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        width: 125px;
        margin-left: auto;
    }
`
