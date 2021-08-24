import * as React from "react"
import styled from "styled-components"
import { Container, Typography, useMediaQuery } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"

const BottomSectionContainer = styled(Container)`
  padding: 8rem 0;
  text-align: center;
`

const MapContainer = styled.div`
  margin-top: 3rem;
`

function BottomSection() {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <BottomSectionContainer id="atrakcje">
      <Typography variant={isSmall ? "h3" : "h2"}>
        Atrakcje w pobliżu
      </Typography>
      <MapContainer>
        <iframe
          title="places"
          src="https://www.google.com/maps/d/embed?mid=1xjXa6cnx7xcHBvrGAW3M_plzLWurQfPB"
          width="100%"
          height="640"
        />
      </MapContainer>
    </BottomSectionContainer>
  )
}

export default BottomSection
