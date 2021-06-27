import * as React from "react"
import styled from "styled-components"

import StyleProvider from "../providers/StyleProvider"
import Navbar from "../components/Navbar"

import Footer from "../components/Footer"

const Main = styled.main`
  margin-top: 110px;
`

const Layout = ({ children }) => {
  return (
    <StyleProvider>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </StyleProvider>
  )
}

export default Layout
