import { vars } from '@/styles/theme.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const firstStyle = style({
  width: '100%',
  border: `1px solid ${vars.color.secondary}`,
  margin: '0 auto',
  color: vars.color.black,
  fontWeight: 600,
  fontSize: vars.size.sm,
  padding: '5px 10px',
  borderRadius: 10,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const secondStyle = style({
  width: '100%',
  border: `1px solid ${vars.color.secondary}`,
  margin: '0 auto',
  color: vars.color.black,
  fontWeight: 600,
  fontSize: vars.size.sm,
  padding: '5px 10px',
  borderRadius: 10,
  display: 'flex',
  gap: 25,
  justifyContent: 'center',
  alignItems: 'center'
})

globalStyle('svg', {
  color: vars.color.secondary
})
