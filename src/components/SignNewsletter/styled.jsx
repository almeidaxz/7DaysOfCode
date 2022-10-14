import styled from 'styled-components';

export const NewsletterContainer = styled.div`
    color: var(--text-color-400);
    height: 462px;
    width: 585px;
    margin-top: 15rem;
`;

export const HighlightText = styled.strong`
    color: var(--text-color-900);
    line-height: 9.4rem;
`;

export const ParagraphContainer = styled.p`
    width: 481px;
    text-align: justify;
    margin-top: 2.4rem;
    line-height: 2.6rem;
`;

export const CustomInputContainer = styled.div`
    height: 75px;
    width: inherit;
    position: relative;
    margin-top: 3.7rem;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
`;

export const MailIcon = styled.img`
    margin-left: 1.8rem;
    height: 10px;
    width: 22px;
    position: absolute;
`;

export const CustomInput = styled.input`
    height: inherit;
    padding: 0 5.5rem;
    width: calc(585px - 192px);
    &::placeholder{
        color: var(--text-color-400);
        font-size: var(--font-size-16);
    }

    &:focus{
        outline: none;
        border: 1px solid var(--theme-color-hover);
    }
`;

export const CustomBtn = styled.button`
    height: inherit;
    width: 194px;
    color: var(--text-color-white);
    background-color: var(--theme-color);
    cursor: pointer;
    &:hover{
        background-color: var(--theme-color-hover);
    }
`;