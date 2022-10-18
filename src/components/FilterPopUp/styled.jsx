import styled from "styled-components";

export const PopUp = styled.div`
    height: 95px;
    width: 80px;
    padding: 1rem;
    border-radius: 5px;
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 13.3rem;
    right: 0.5rem;
    z-index: 2;
`;

export const CustomInput = styled.input`
    font-size: 1rem;
    width: 40px;
    height: 18px;
    border: 1px solid gray;
    &::placeholder {
        padding: 0.2rem;
    }
`;

export const CustomBtn = styled.button`
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    color: var(--theme-color);
    border: none;
    background-color: #FFF;
    cursor: pointer;
    &:hover{
        color: var(--theme-color-hover);
    }
`;