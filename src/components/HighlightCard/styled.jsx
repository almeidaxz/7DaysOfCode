import styled from "styled-components";

export const CardContainer = styled.div`
    color: var(--text-color-400);
    margin: 0 auto;
    width: 995px;
    height: 440px;
    display: flex;
    background-color: #FFF;
`

export const PlantImage = styled.img`
    width: 600px;
`

export const CardTextContainer = styled.div`
    padding: 3rem;
`

export const HighlightText = styled.strong`
    font-family: var(--highlight-font-family);
    color: var(--text-color-900);
    line-height: 4.8rem;
    margin-bottom: 0.3rem
`;
