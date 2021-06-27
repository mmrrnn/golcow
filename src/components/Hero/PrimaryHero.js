import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import {
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core"

const backgroundStyles = 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)),';

const HeroContainer = styled(Container)`
  height: calc(100vh - 110px);
  padding: 4rem 0;
  color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const HeroButton = styled(Button)`
  padding: 1rem 2rem;
  background-color: #fff;
`

function Hero() {
  const { allContentfulHomeHero: { nodes } } = useStaticQuery(graphql`
    {
      allContentfulHomeHero {
        nodes {
          buttonContent
          heroImage {
            file {
              url
            }
          }
          title
        }
      }
    }
  `)
  const {
    title,
    buttonContent,
    heroImage: {
      file: { url: heroImage }
    }
  } = nodes[0]
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <HeroContainer maxWidth="xl" style={{ backgroundImage: `${backgroundStyles} url(${heroImage})` }}>
      <Grid
        container
        alignItems="center"
        direction="column"
        justify="flex-end"
        style={{ height: "100%" }}
      >
        <Grid item style={{ margin: "2rem" }}>
          <Typography variant={isMobile ? "h3" : "h1"} align="center">
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <HeroButton variant="contained">{buttonContent}</HeroButton>
        </Grid>
      </Grid>
    </HeroContainer>
  )
}

export default Hero
