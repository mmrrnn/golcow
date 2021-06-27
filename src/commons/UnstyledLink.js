import { Link } from "gatsby"
import styled from "styled-components"

const UnstyledLink = styled(Link)`
  &,
  &:visited,
  &:hover,
  &:active {
    font-style: inherit;
    color: inherit;
    background-color: transparent;
    font-size: inherit;
    text-decoration: none;
    font-variant: inherit;
    font-weight: inherit;
    line-height: inherit;
    font-family: inherit;
  }
`;

export default UnstyledLink;
