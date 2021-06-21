import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#B4C5E4',
      main: '#3C3744',
      dark: '#090C9B',
      contrastText: '#FBFFF1',
    },
    secondary: {
      light: '#B4C5E4',
      main: '#B4C5E4',
      dark: '#090C9B',
      contrastText: '#FBFFF1',
    },
      openTitle: '#090C9B',
      protectedTitle: '#B4C5E4',
      type: 'light'
    }
  })

  export default theme