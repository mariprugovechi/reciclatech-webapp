import { vars } from '@/styles/theme.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const divStyle = style({
  backgroundColor: vars.color.white,
  borderRadius: 10,
  width: '90vw',
  maxWidth: '850px',
  maxHeight: '50vh',
  margin: '0 auto',
  padding: '20px 25px',
  boxShadow: '4px 4px 20px -8px rgba(0,51,40,1)'
})

globalStyle(`${divStyle} > div`, {
  overflowY: 'auto',
  maxHeight: '100%',
  paddingRight: '15px'
})

