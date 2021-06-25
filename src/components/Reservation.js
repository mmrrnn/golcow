import * as React from 'react';
import styled from 'styled-components';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
  Grid,
  Container,
  Typography,
  TextField,
  useMediaQuery
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const ReservationContainer = styled(Container)`
  text-align: center;
  padding: 6rem 0;
`;

const ReservationBox = styled(Grid)`
  margin: 3rem 0;
  padding: 3rem 1rem;
  border: 5px solid rgb(243, 243, 243);
`;

const ResultContainer = styled(Grid)`
  padding-top: 4rem;
`;

const MarginedGrid = styled(Grid)`
  margin: 1rem 0;
`

function Reservation() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <ReservationContainer>
      <Typography variant={isSmall ? 'h3' : 'h2'}>Sprawdz dostepnosc</Typography>
      <ReservationBox>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <MarginedGrid item xs={12} md={4}>
              <Typography variant="h6">data przyjazdu</Typography>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MarginedGrid>
            <MarginedGrid item xs={12} md={4}>
              <Typography variant="h6">data wyjazdu</Typography>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MarginedGrid>
            <MarginedGrid item xs={12} md={4}>
              <Typography variant="h6">liczba osob</Typography>
              <TextField
                defaultValue={4}
                margin="normal"
                id="standard-number"
                type="number"
              />
            </MarginedGrid>
            <ResultContainer item xs={12}>
              <Typography variant="h4">Szacunkowa cena: <b>700,-</b></Typography>
            </ResultContainer>
          </Grid>
        </MuiPickersUtilsProvider>
      </ReservationBox>
    </ReservationContainer>
  )
}

export default Reservation;
