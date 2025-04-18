import { RendererCSSSet } from '@frfla/react-md-renderer'

export const MARKDOWN_CSS: Partial<RendererCSSSet> = {
  h1: {
    marginBottom: '4rem',
    textAlign: 'center',
    fontSize: '2.25rem',
    lineHeight: '1.3',
    fontWeight: '700',
  },
  h2: {
    marginBottom: '0.5rem',
    fontSize: '1.55rem',
    lineHeight: '1.3',
    fontWeight: '600',
  },
  h3: {
    marginBottom: '0.5rem',
    lineHeight: '1.3',
    fontSize: '1.3rem',
    fontWeight: '600',
  },
  h4: { fontWeight: '600' },
  h5: { fontWeight: '600' },
  h6: {},
  hr: {},
  p: { marginBottom: '1rem', lineHeight: '1.85', fontSize: '1.05rem' },
  a: {
    color: '#888',
    textDecoration: 'underline',
    textUnderlineOffset: '0.2rem',
    '&:hover': {
      color: 'black',
    },
  },
  blockquote: {
    marginBottom: '3rem',
  },
  checkbox: {},
  img: {
    display: 'block',
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '10rem',
    marginBottom: '2rem',
  },
  ul: { paddingLeft: '1.21rem', marginBottom: '2rem' },
  ol: {
    marginBottom: '2rem',
    paddingLeft: '1.4rem',
    '& li::marker': {
      fontFeatureSettings: '"calt" "case"',
    },
  },
  li: {
    fontSize: '1.05rem',
    padding: 0,
    margin: 0,
  },
  table: {
    marginBottom: '2rem',
  },
  typography: {
    strike: undefined,
    strong: {
      fontWeight: '600',
    },
    italic: undefined,
  },
}
