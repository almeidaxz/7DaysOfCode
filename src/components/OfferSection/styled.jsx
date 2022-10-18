import styled from "styled-components";

export const OfferSectionContainer = styled.section`
    color: var(--text-color-900);
    margin-top: 4.4rem;
    position: relative;
`;

export const FadedText = styled.span`
    color: var(--text-color-400);
`;

export const HighlightText = styled.strong`
    color: var(--text-color-900);
    line-height: 9.4rem;
    margin-bottom: 1.5rem;
`;

export const ButtonsWrapper = styled.div`
    position: relative;
`

export const FilterBtn = styled.div`
    padding: 5px 15px;
    position: absolute;
    top: 10.5rem;
    right: 0;
    border-radius: 15px;
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    &:hover {
        background-color: rgb(217, 217, 217);
    }
`
export const OrderBtn = styled.div`
    padding: 5px 15px;
    position: absolute;
    top: 10.5rem;
    right: 7rem;
    border-radius: 15px;
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    &:hover {
        background-color: rgb(217, 217, 217);
    }
`