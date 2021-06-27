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
import UnstyledLink from '../commons/UnstyledLink';
import * as React from "react"
import styled from "styled-components"

const NavButton = styled(Button)`
  margin: 16px;
`

const NavLink = styled(UnstyledLink)`
  display: block;
`

export default function NavPopover({ open, handleClose }) {
  return (
    <Popover
      open={open}
      anchorReference="anchorPosition"
      anchorPosition={{ top: 110, left: 0 }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      onClose={handleClose}
      PaperProps={{
        style: {
          width: "100vw",
          padding: "1rem",
          border: "none",
          borderRadius: "0",
          background: "#f5f5f5",
        },
      }}
    >
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
    </Popover>
  )
}
