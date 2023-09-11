import { globalStyle, createGlobalTheme  } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    primary: "#79DEC2",
    secondary: "#003328",
    tertiary: "#0A6641",
    black: '#000000',
    white: '#ffffff'
  },
  size: {
    xs: '14px',
    sm: '18px',
    md: '22px',
    lg: '25px'
  }
})

globalStyle('html, body, *', {
  margin: 0,
  padding: 0,
  border: 0,
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'Roboto, sans-serif'
})

globalStyle('body', {
  backgroundColor: vars.color.primary
})

