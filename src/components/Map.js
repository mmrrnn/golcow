import React from "react"
import styled from "styled-components"
import { Grid, Typography, IconButton, SvgIcon } from "@material-ui/core"
import { PhoneAndroid, MailOutline } from "@material-ui/icons"

const Container = styled.div`
  width: 100%;
`

const MapFrame = styled.iframe`
  border: none;
  height: 640px;
  width: 100%;
`

const LeftGrid = styled(Grid)`
  display: flex;
  align-items: center;
  padding: 2rem 0.5rem;
`

const ContactBox = styled.div`
  margin: 3rem auto;
  padding: 1rem;
  display: flex;
  justify-content: left;
  align-items: center;
  max-width: 480px;
  border: 5px solid rgb(243, 243, 243);
`

const ContactIcon = styled(SvgIcon)`
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.gold};
`

const CenteredWrapper = styled.div`
  margin: auto;
`

function Map() {
  return (
    <Container className="embed-responsive">
      <Grid container>
        <LeftGrid item xs={12} md={6}>
          <CenteredWrapper>
            <Typography variant="h4" align="center">
              Zapraszamy do kontaktu
            </Typography>
            <ContactBox>
              <IconButton style={{ margin: "0.5rem" }}>
                <ContactIcon component={PhoneAndroid} />
              </IconButton>
              <div>
                <Typography variant="h6">Numer Telefonu</Typography>
                <Typography variant="h6">
                  <b>+(48) 607 514 585</b>
                </Typography>
              </div>
            </ContactBox>
            <ContactBox>
              <IconButton style={{ margin: "0.5rem" }}>
                <ContactIcon component={MailOutline} />
              </IconButton>
              <div>
                <Typography variant="h6">Adres E-mail</Typography>
                <Typography variant="body1">
                  <b>kinga.bieda.kb@gmail.com</b>
                </Typography>
              </div>
            </ContactBox>
          </CenteredWrapper>
        </LeftGrid>
        <Grid item xs={12} md={6}>
          <MapFrame
            className="embed-responsive-item"
            src="https://maps.google.com/maps?q=Domek%20letniskowy%20pod%20golcowem,%20Stara%20wie%C5%9B%20508&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allow="encrypted-media"
            allowfullscreen
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Map
