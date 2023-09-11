import { globalStyle, style } from '@vanilla-extract/css'

export const sectionStyle = style({
  height: '100vh',
  padding: '75px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 50
})

export const paragraphStyle = style({
  margin: '20px 0'
})

globalStyle('a', {
  textDecoration: 'none',
  width: 'fit-content',
  margin: 'auto'
})
