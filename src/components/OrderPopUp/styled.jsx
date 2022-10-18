import styled from "styled-components";

export const PopUp = styled.div`
    height: 4.5rem;
    width: 7rem;
    border-radius: 5px;
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 13.3rem;
    right: 7.5rem;
    overflow: hidden;
    z-index: 2;
`;

export const OrderOption = styled.span`
    line-height: 2rem;
    padding: 0 0.5rem;
    cursor: pointer;
    &:hover {
        background-color: rgb(217, 217, 217);
    }
`;