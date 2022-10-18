import styled from "styled-components";

export const ItemContentWrapper = styled.div`
    width: 379px;
    height: 200px;
    text-align: center;
    postition: relative;
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
`;

export const ItemImageWrapper = styled.div`
    height: inherit;
    width: inherit;
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
`;

export const ItemTextContentWrapper = styled.div`
    width: 30%;
    z-index: 1;
    margin-left: 50%;
    padding: 2.2rem 0 3.8rem 0;
    text-align: start;
`;

export const ItemTitle = styled.h1`
    color: var(--text-color-900);
    line-heigth: 3.6rem;
    margin-bottom: 0.8rem;
`;

export const BuyBtn = styled.button`
    font-family: 'Montserrat', sans-serif;
    color: var(--theme-color);
    width: 110px;
    margin-top: 2.4rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`;

export const FadedText = styled.span`
    color: var(--text-color-400);
`;