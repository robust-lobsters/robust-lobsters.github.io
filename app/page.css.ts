import { style } from '@vanilla-extract/css'

export const POST_LIST = style({
  display: 'block',
  padding: '0.75rem 0 0.75rem 0',
  fontSize: '2rem',
  fontWeight: 700,
  selectors: {
    '&:hover': {
      color: 'rgb(130, 215, 247)',
    },
  },
})

export const POST_LIST_WRAPPER = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
})
