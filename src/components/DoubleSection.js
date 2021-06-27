import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Grid, Typography, useMediaQuery } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"

import barbequeIcon from "../images/barbeque.svg"

const LeftSection = styled(Grid)`
  min-height: 460px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const RightSection = styled(Grid)`
  padding: 6rem 4rem;
  background-color: ${({ theme }) => theme.palette.black};
`

const Title = styled(Typography)`
  color: #fff;
`

const Subtitle = styled(Typography)`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.palette.gold};
  font-family: "Cinzel", "Helvetica", "Arial", "sans-serif";
  letter-spacing: 1;
  font-weight: bold;
  text-transform: capitalize;
`

const Paragraph = styled(Typography)`
  margin-top: 2rem;
  font-family: "Ubuntu", "Helvetica", "Arial", "sans-serif";
  color: ${({ theme }) => theme.palette.whiteGrey};
`

const Icon = styled.img`
  height: 48px;
`

const IconSection = styled(Grid)`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`

const IconHeader = styled(Typography)`
  margin-left: 1rem;
  color: #fff;
  font-family: "Cinzel", "Helvetica", "Arial", "sans-serif";
  text-transform: uppercase;
`

function DoubleSection() {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
  const {
    allContentfulHomeDoubleSection: { nodes },
  } = useStaticQuery(graphql`
    {
      allContentfulHomeDoubleSection {
        nodes {
          title
          subtitle
          description {
            description
          }
          icon1
          icon2
          icon3
          icon4
          icon5
          icon6
          image {
            file {
              url
            }
          }
        }
      }
    }
  `)
  const {
    title,
    subtitle,
    description: { description },
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    image: {
      file: { url: bgUrl }
    }
  } = nodes[0]

  return (
    <Grid container>
      <LeftSection item xs={12} md={6} style={{ backgroundImage: `url(${bgUrl})` }} />
      <RightSection item xs={12} md={6}>
        <Title variant={isSmall ? "h4" : "h3"}>{title}</Title>
        <Subtitle variant="subtitle1">{subtitle}</Subtitle>
        <Paragraph paragraph>{description}</Paragraph>
        <Grid container>
          <IconSection item xs={12} sm={6}>
            <Icon src={barbequeIcon} />
            <IconHeader variant="subtitle2">{icon1}</IconHeader>
          </IconSection>
          <IconSection item xs={12} sm={6}>
            <Icon src={barbequeIcon} />
            <IconHeader variant="subtitle2">{icon2}</IconHeader>
          </IconSection>
          <IconSection item xs={12} sm={6}>
            <Icon src={barbequeIcon} />
            <IconHeader variant="subtitle2">{icon3}</IconHeader>
          </IconSection>
          <IconSection item xs={12} sm={6}>
            <Icon src={barbequeIcon} />
            <IconHeader variant="subtitle2">{icon4}</IconHeader>
          </IconSection>
          <IconSection item xs={12} sm={6}>
            <Icon src={barbequeIcon} />
            <IconHeader variant="subtitle2">{icon5}</IconHeader>
          </IconSection>
          <IconSection item xs={12} sm={6}>
            <Icon src={barbequeIcon} />
            <IconHeader variant="subtitle2">{icon6}</IconHeader>
          </IconSection>
        </Grid>
      </RightSection>
    </Grid>
  )
}

export default DoubleSection
