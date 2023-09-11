import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const buttonStyle = style({
  maxWidth: 'fit-content',
  backgroundColor: vars.color.secondary,
  margin: '0 auto',
  textTransform: 'uppercase',
  color: vars.color.white,
  fontWeight: 700,
  fontSize: vars.size.sm,
  padding: '10px 25px',
  borderRadius: 5,
  display: 'block',
  cursor: 'pointer'
})