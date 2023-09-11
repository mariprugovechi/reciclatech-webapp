import { globalStyle, style } from '@vanilla-extract/css'

export const sectionStyle = style({
  height: '90vh',
  padding: '75px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 50
})

export const divStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 40
})

globalStyle('a', {
  textDecoration: 'none'
})
