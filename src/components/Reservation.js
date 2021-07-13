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
  Grid,
  Container,
  Typography,
  TextField,
  useMediaQuery,
} from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"

import {
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
  const todayDate = new Date();
  const reservedDays = getDates(nodes).map(formatDate)
  const disableDate = date => {
    const parsedDate = parseDate(date)
    return reservedDays.includes(parsedDate) || date < getYesterdayDate(todayDate);
  }
  const disableTomorrow = date => {
    return disableDate(getYesterdayDate(date)) || date < startDate
  }

  React.useEffect(() => {
    if (startDate > endDate) setEndDate(getTomorrowDate(startDate));
  }, [startDate]);

  return (
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
                defaultValue={4}
                margin="normal"
                id="standard-number"
                type="number"
              />
            </MarginedGrid>
            <ResultContainer item xs={12}>
              <Typography variant="h4">
                Szacunkowa cena: <b>700,-</b>
              </Typography>
            </ResultContainer>
          </Grid>
        </MuiPickersUtilsProvider>
      </ReservationBox>
    </ReservationContainer>
  )
}

export default Reservation
