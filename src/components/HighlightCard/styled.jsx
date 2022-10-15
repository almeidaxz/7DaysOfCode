import styled from "styled-components";

export const CardContainer = styled.section`
    color: var(--text-color-400);
    margin: 0 auto;
    width: 995px;
    height: 440px;
    display: flex;
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
`;

export const PlantImage = styled.img`
    width: 600px;
`;

export const CardTextContainer = styled.div`
    padding: 3rem;
`;

export const HighlightText = styled.strong`
    font-family: var(--highlight-font-family);
    color: var(--text-color-900);
    line-height: 4.8rem;
    margin-bottom: 0.3rem
`;
