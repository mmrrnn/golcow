import {
  AppBar,
  Button,
  Grid,
  Hidden,
  IconButton,
  Popover,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"
import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import NavPopover from "./NavPopover"

const NavButton = styled(Button)`
  margin: 16px;
`

const NavLink = styled(Link)`
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
`

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <AppBar
        position="static"
        color="default"
        style={{ height: "110px" }}
        position="fixed"
      >
        <Toolbar style={{ height: "100%" }}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <NavLink to="/">
                <Typography variant="h5">POD GOLCOWEM</Typography>
              </NavLink>
            </Grid>
            <Grid item>
              <Hidden mdDown>
                <NavLink to="/">
                  <NavButton color="inherit">STRONA GŁÓWNA</NavButton>
                </NavLink>
                <NavLink to="/galeria">
                  <NavButton color="inherit">GALERIA</NavButton>
                </NavLink>
                <NavLink to="/rezerwacja">
                  <NavButton color="inherit">REZERWACJA</NavButton>
                </NavLink>
                <NavLink to="/kontakt">
                  <NavButton color="inherit">KONTAKT</NavButton>
                </NavLink>
              </Hidden>
              <Hidden mdUp>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <NavPopover open={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  )
}
