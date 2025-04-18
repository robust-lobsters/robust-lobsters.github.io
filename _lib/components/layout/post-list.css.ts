import { style } from '@vanilla-extract/css'

export const POST_LIST = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.3rem',
  padding: '0.75rem 0 0.75rem 0',
  fontSize: '1.35rem',
  fontWeight: 600,
  selectors: {
    '&:hover': {
      color: 'rgb(130, 215, 247)',
    },
  },
})

export const POST_LIST_WRAPPER = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
})
