import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NormalLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

export const Button = styled.span`
    font-size: 24px;
    background-color: white;
    padding: 14px 24px;
    border: 0;
    border-radius: 7px;
    box-shadow: 0px 6px 12px -4px #525252;
`;
