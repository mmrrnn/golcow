import { createMuiTheme } from '@material-ui/core/styles';

const headersStyle = {
  fontFamily: "'Cinzel', 'Helvetica', 'Arial', 'sans-serif'",
  letterSpacing: 1
}

export default createMuiTheme({
  typography: {
    h1: headersStyle,
    h2: headersStyle,
    h3: headersStyle,
    h4: headersStyle,
    h5: headersStyle,
    h6: headersStyle,
    p: { fontFamily: "'Ubuntu', 'Helvetica', 'Arial', 'sans-serif'" },
    span: { fontFamily: "'Ubuntu', 'Helvetica', 'Arial', 'sans-serif'" }
  },
  palette: {
    black: '#423A37',
    gold: 'rgb(207, 157, 108)',
    whiteGrey: 'rgb(200, 192, 184)'
  }
});