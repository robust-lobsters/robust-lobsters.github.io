import { style } from '@vanilla-extract/css'

export const BASE = style({
  cursor: 'pointer',
  padding: '0.75rem 0.35rem 0.75rem 0.35rem',
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
