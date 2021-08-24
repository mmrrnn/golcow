import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import pl from "date-fns/locale/pl"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import {
  Avatar,
  Grid,
  Container,
  Typography,
  TextField,
  useMediaQuery,
} from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"

import {
  dayInMS,
  formatDate,
  parseDate,
  getDates,
  getTomorrowDate,
  getYesterdayDate,
} from "../utils"

const ReservationContainer = styled(Container)`
  text-align: center;
  padding: 6rem 0;
`

const ReservationBox = styled(Grid)`
  margin: 3rem 0;
  padding: 3rem 1rem;
  border: 5px solid rgb(243, 243, 243);
`

const ResultContainer = styled(Grid)`
  padding-top: 4rem;
`

const MarginedGrid = styled(Grid)`
  margin: 1rem 0;
`

const StepsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
`;

const StepAvatar = styled(Avatar)`
  margin-right: 1rem;
  background-color: rgb(207, 157, 108);
`;

function Reservation() {
  const {
    allContentfulReservationEntity: { nodes },
  } = useStaticQuery(graphql`
    {
      allContentfulReservationEntity {
        nodes {
          date {
            content
          }
        }
      }
    }
  `)
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
  const [startDate, setStartDate] = React.useState(new Date())
  const [endDate, setEndDate] = React.useState(getTomorrowDate(startDate))
  const [guests, setGuests] = React.useState(2)
  const [price, setPrice] = React.useState(null)
  const todayDate = new Date()
  const reservedDays = getDates(nodes).map(formatDate)
  const disableDate = date => {
    const parsedDate = parseDate(date)
    return (
      reservedDays.includes(parsedDate) || date < getYesterdayDate(todayDate)
    )
  }
  const disableTomorrow = date => {
    return disableDate(getYesterdayDate(date)) || date < startDate
  }
  const handleGuestsChange = event => {
    const value = event.target.valueAsNumber
    setGuests(value)
  }

  React.useEffect(() => {
    if (guests > 6) setGuests(6)
    if (guests < 2) setGuests(2)
  }, [guests])

  React.useEffect(() => {
    if (startDate > endDate) setEndDate(getTomorrowDate(startDate))
  }, [startDate, endDate])

  React.useEffect(() => {
    const days = Math.round((endDate.getTime() - startDate.getTime()) / dayInMS)

    if (days === 1) {
      if (startDate.getDay() === 5) {
        setPrice(400)
        return
      }
      if (startDate.getDay() === 6) {
        setPrice(500)
        return
      }
    }
    if (days === 2) {
      if (startDate.getDay() === 5) {
        setPrice(700)
        return
      }
      if (startDate.getDay() === 6) {
        setPrice(600)
        return
      }
    }
    if (guests < 5) {
      setPrice(240 * days)
    } else if (guests === 5) {
      setPrice(300 * days)
    } else {
      setPrice(350 * days)
    }
  }, [startDate, endDate, guests])

  return (
    <>
      <ReservationContainer>
        <Typography variant={isSmall ? "h3" : "h2"}>
          Sprawdź dostępność
        </Typography>
        <ReservationBox>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pl}>
            <Grid container justify="space-around">
              <MarginedGrid item xs={12} md={4}>
                <Typography variant="h6">data przyjazdu</Typography>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-arrival"
                  value={startDate}
                  onChange={setStartDate}
                  KeyboardButtonProps={{
                    "aria-label": "arrival date",
                  }}
                  shouldDisableDate={disableDate}
                />
              </MarginedGrid>
              <MarginedGrid item xs={12} md={4}>
                <Typography variant="h6">data wyjazdu</Typography>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-departure"
                  value={endDate}
                  onChange={setEndDate}
                  KeyboardButtonProps={{
                    "aria-label": "departure date",
                  }}
                  shouldDisableDate={disableTomorrow}
                />
              </MarginedGrid>
              <MarginedGrid item xs={12} md={4}>
                <Typography variant="h6">liczba osób</Typography>
                <TextField
                  value={guests}
                  onChange={handleGuestsChange}
                  margin="normal"
                  id="standard-number"
                  type="number"
                />
              </MarginedGrid>
              <ResultContainer item xs={12}>
                {!!guests && (
                  <Typography variant="h4">
                    Szacunkowa cena: <b>{price},- *</b>
                  </Typography>
                )}
              </ResultContainer>
            </Grid>
          </MuiPickersUtilsProvider>
          <ul align="left">
            <li>
              * Podana cena jest szacunkowa. Dokładna cena zostanie uzgodniona
              telefonicznie.
            </li>
            <li>
              Doba hotelowa od 15 w dniu przyjazdu do 11 w dniu wyjazdu – jeśli
              najmujący chciałby przedłużyć dobę np. do 19.00 w dniu wyjazdu –
              opłata 100 zł
            </li>
            <li>
              Pobierana jest zaliczka w wysokości 30% całkowitej ceny wynajmu.
            </li>
            <li>Pobierana kaucja w wysokości 200 zł.</li>
            <li>
              W okresie zimowym październik - luty dodatkowa opłata za
              ogrzewanie 2zł - 1 kWh.
            </li>
          </ul>
        </ReservationBox>
        <Container maxWidth="sm">
          <Typography variant="h4" align="center">Jak dokonać rezerwacji?</Typography>
          <StepsContainer>
            <StepAvatar>1</StepAvatar>
            <Typography variant="subtitle1" align="left">Sprawdź dostępność terminu.</Typography>
          </StepsContainer>
          <StepsContainer>
            <StepAvatar>2</StepAvatar>
            <Typography variant="subtitle1" align="left">Wykonaj telefon na numer <b>607 514 585</b> lub kontaktuj się mailowo.</Typography>
          </StepsContainer>
          <StepsContainer>
            <StepAvatar>3</StepAvatar>
            <Typography variant="subtitle1" align="left">Dokonaj rezerwacji poprzez wpłacenie zaliczki.</Typography>
          </StepsContainer>
          <StepsContainer>
            <StepAvatar>4</StepAvatar>
            <Typography variant="subtitle1" align="left">Ciesz się swoim urlopem w zaciszu malowniczych gór.</Typography>
          </StepsContainer>
        </Container>
      </ReservationContainer>
    </>
  )
}

export default Reservation
