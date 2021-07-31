import * as React from "react"
import styled from "styled-components"
import { Container, Typography, useMediaQuery } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"

const BottomSectionContainer = styled(Container)`
  padding: 8rem 0;
  text-align: center;
`

function BottomSection() {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <BottomSectionContainer id="atrakcje">
      <Typography variant={isSmall ? "h3" : "h2"}>
        Atrakcje w poblizu
      </Typography>
    </BottomSectionContainer>
  )
}

export default BottomSection
