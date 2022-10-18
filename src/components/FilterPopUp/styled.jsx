import styled from "styled-components";

export const PopUp = styled.div`
    height: 11rem;
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
    padding: 0.3rem;
    margin-bottom: 0.1rem;
    border: 1px solid gray;
    &:focus{
        outline: none;
        border: 1px solid var(--theme-color);
    }
    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type=number] {
      -moz-appearance: textfield;
    }
`;

export const CustomApplyBtn = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    text-align: left;
    color: var(--theme-color);
    background-color: #FFF;
    margin-top: 0.6rem;
    border: none;
    cursor: pointer;
    &:hover{
        color: var(--theme-color-hover);
    }
`;

export const CustomResetBtn = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-align: left;
    color: rgb(169, 0, 0);
    border: none;
    background-color: #FFF;
    cursor: pointer;
    &:hover{
        color: rgb(234, 113, 113);
    }
`;