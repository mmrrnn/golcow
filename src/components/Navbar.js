import {
  AppBar,
  Button,
  Grid, Hidden, IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import {
  Menu as MenuIcon
} from '@material-ui/icons';
import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

// import Logo from '../images/mountain.svg';

// const LogoImg = styled.img`
//     height: 70px;
// `;

const NavButton = styled(Button)`
    margin: 16px;
`;

const NavLink = styled(Link)`
  &, &:visited, &:hover, &:active {
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
`

export default function Navbar() {
  return (
    <AppBar position="static" color="default" style={{ height: "110px", padding: "20px 10px" }} position="fixed">
        <Toolbar style={{ height: "100%" }}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
                <Typography variant="h5">
                  POD GOLCOWEM
                </Typography>
            </Grid>
            <Grid item>
                <Hidden mdDown>
                <NavLink to="/">
                    <NavButton color="inherit">
                      STRONA GŁÓWNA
                    </NavButton>
                  </NavLink>
                  <NavLink to="/galeria">
                    <NavButton color="inherit">
                      GALERIA
                    </NavButton>
                  </NavLink>
                  <NavLink to="/rezerwacja">
                    <NavButton color="inherit">
                      REZERWACJA
                    </NavButton>
                  </NavLink>
                  <NavLink to="/kontakt">
                    <NavButton color="inherit">
                      KONTAKT
                    </NavButton>
                  </NavLink>
                </Hidden>
                <Hidden mdUp>
                  <IconButton edge="end" color="inherit" aria-label="menu">
                      <MenuIcon />
                  </IconButton>
                </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
  );
}
