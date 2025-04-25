import { style } from '@vanilla-extract/css'

export const HEADER = style({
  width: '100%',
  height: '4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0.75rem',
  backgroundColor: '#222628',
})

export const LOGO = style({
  fontWeight: 700,
  textTransform: 'capitalize',
  fontSize: '1.25rem',
  color: 'white',
})
