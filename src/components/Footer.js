import * as React from "react"
import styled from "styled-components"
import { Hidden, Grid, Typography, useMediaQuery } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"

import UnstyledLink from '../commons/UnstyledLink';

const FooterContainer = styled.footer`
  padding: 3rem 0;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.black};
  .border {
    border-left: 1px solid rgb(104, 97, 94);
    border-right: 1px solid rgb(104, 97, 94);
  }
`

const WhiteTitle = styled(Typography)`
  color: white;
`

const SmallTitle = styled(Typography)`
  font-size: 12px;
  color: white;
  font-weight: bold;
  font-family: "Ubuntu", "Helvetica", "Arial", "sans-serif";
  text-transform: uppercase;
`

const PhoneNumber = styled.span`
  font-size: 2rem;
  font-weight: bold;
  font-family: "Cinzel", "Helvetica", "Arial", "sans-serif";
  color: ${({ theme }) => theme.palette.gold};
`

const TripleContainer = styled(Grid)`
  margin-top: 3rem;
  > * {
    margin-top: 2rem;
  }
`

const MiddleContainer = styled(Grid)`
  padding: 0 0.5rem;
`

const List = styled.ul`
  padding: 0;
  list-style: none;
`

const ListItem = styled.li`
  margin-top: 1rem;
  color: ${({ theme }) => theme.palette.whiteGrey};
`

function Footer() {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <FooterContainer>
      <WhiteTitle variant="h4" align="center">
        Pod Golcowem
      </WhiteTitle>
      <TripleContainer container justify="center">
        <Hidden smDown>
          <Grid item xs={12} sm={4} md={3}>
            <WhiteTitle variant="h6">Nawigacja</WhiteTitle>
            <List>
              <UnstyledLink to="/">
                <ListItem>Strona Główna</ListItem>
              </UnstyledLink>
              <UnstyledLink to="/galeria">
                <ListItem>Galeria</ListItem>
              </UnstyledLink>
              <UnstyledLink to="/rezerwacja">
                <ListItem>Rezerwacja</ListItem>
              </UnstyledLink>
              <UnstyledLink to="/kontakt">
                <ListItem>Kontakt</ListItem>
              </UnstyledLink>
            </List>
          </Grid>
        </Hidden>
        <MiddleContainer
          item
          xs={12}
          sm={4}
          md={3}
          className={isSmall ? "" : "border"}
        >
          <WhiteTitle variant="h6">Informacje</WhiteTitle>
          <List>
            <ListItem>Stara Wieś 728, 34-600 Limanowa</ListItem>
          </List>
          <SmallTitle variant="subtitle1">Telefon Kontaktowy</SmallTitle>
          <div>
            <PhoneNumber>+(48) 607 514 585</PhoneNumber>
          </div>
        </MiddleContainer>
        <Grid item xs={12} sm={4} md={3}>
          <WhiteTitle variant="h6">O nas</WhiteTitle>
          <List>
            <UnstyledLink to="/#atrakcje">
              <ListItem>Atrakcje</ListItem>
            </UnstyledLink>
            <UnstyledLink to="/kontakt">
              <ListItem>Kontakt</ListItem>
            </UnstyledLink>
            <UnstyledLink to="/regulamin">
              <ListItem>Regulamin</ListItem>
            </UnstyledLink>
          </List>
        </Grid>
      </TripleContainer>
    </FooterContainer>
  )
}

export default Footer
