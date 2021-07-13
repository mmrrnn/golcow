import {
  AppBar,
  Button,
  Grid,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"
import * as React from "react"
import styled from "styled-components"

import UnstyledLink from '../commons/UnstyledLink';
import NavPopover from "./NavPopover"

const NavButton = styled(Button)`
  margin: 16px;
`

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <AppBar
        color="default"
        style={{ height: "110px" }}
        position="fixed"
      >
        <Toolbar style={{ height: "100%" }}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <UnstyledLink to="/">
                <Typography variant="h5">POD GOLCOWEM</Typography>
              </UnstyledLink>
            </Grid>
            <Grid item>
              <Hidden smDown>
                <UnstyledLink to="/">
                  <NavButton color="inherit">STRONA GŁÓWNA</NavButton>
                </UnstyledLink>
                <UnstyledLink to="/galeria">
                  <NavButton color="inherit">GALERIA</NavButton>
                </UnstyledLink>
                <UnstyledLink to="/rezerwacja">
                  <NavButton color="inherit">REZERWACJA</NavButton>
                </UnstyledLink>
                <UnstyledLink to="/kontakt">
                  <NavButton color="inherit">KONTAKT</NavButton>
                </UnstyledLink>
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
