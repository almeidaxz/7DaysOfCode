import styled from "styled-components";

export const CustomNavBar = styled.nav`
    margin-top: 1rem;
`;

export const MenuItemBox = styled.div`
    &:hover {
        transform: scale(1.1);
    }
`;

export const MenuItem = styled.a`
    color: var(--text-color-900);
    line-height: 1.95rem;
`;