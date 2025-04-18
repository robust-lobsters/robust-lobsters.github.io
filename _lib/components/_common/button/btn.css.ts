import { style } from '@vanilla-extract/css'

export const BASE = style({
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.35rem 0.5rem 0.35rem 0.5rem',
  borderRadius: '0.4rem',
  border: `1px solid transparent`,
  backgroundColor: 'transparent',
  backgroundBlendMode: 'exclusion',
  color: 'inherit',
  selectors: {
    '&:hover': {
      backgroundColor: '#f0f2f3',
    },
    '&:active': {
      backgroundColor: '#f0f2f3',
    },
  },
})
