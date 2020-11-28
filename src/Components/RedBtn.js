import styled from 'styled-components';

export const RedBtn = styled.button`
background: transparent;
color: var(--garnet);
border: 1px solid var(--garnet);
transition: all 0.3s ease-in-out;
&:hover {
    background: var(--garnet);
    color: var(--ivory);
}
&:focus {
    outline: none;
}
`