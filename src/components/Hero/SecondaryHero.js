import React from "react"
import styled from "styled-components"
import { Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core"

import mainHeroImage from "../../images/mainHeroImage.jpeg"

const HeroContainer = styled(Grid)`
  height: 320px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("${mainHeroImage}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

function SmallHero({ title }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <HeroContainer
      container
      alignItems="center"
      justify="center"
      data-sal="fade"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <Typography
        style={{ color: "white" }}
        variant={isMobile ? "h4" : "h2"}
        data-sal="slide-down"
        data-sal-duration="1400"
        data-sal-easing="ease"
      >
        {title}
      </Typography>
    </HeroContainer>
  )
}

export default SmallHero
