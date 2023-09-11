import { vars } from '@/styles/theme.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const navStyle = style({
  height: '9vh',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100vw',
  maxWidth: '850px',
  margin: 'auto'
})

globalStyle('svg', {
  fontSize: vars.size.lg
})
