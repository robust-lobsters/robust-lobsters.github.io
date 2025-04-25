import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', { margin: 0, padding: 0, boxSizing: 'border-box' });
globalStyle('body', {
  width: '100%',
  height: 'auto',
  WebkitTextSizeAdjust: '100%',
  MozTextSizeAdjust: '100%',
  MozOsxFontSmoothing: 'grayscale',
  WebkitFontSmoothing: 'antialiased',
});
globalStyle('h1, h2, h3, h4, h5, h6, p, span, li', {
  fontFamily: '"42dot Sans", sans-serif',
});
globalStyle('p, span, li', {
  lineHeight: 1.85,
});
globalStyle('input, button, textarea', {
  fontFamily: '"42dot Sans", sans-serif',
});
globalStyle('html', {
  fontSize: '100%',
});
globalStyle('a', {
  fontFamily: '"42dot Sans", sans-serif',
  color: 'inherit',
  textDecoration: 'none',
  textUnderlineOffset: '0.25rem',
});
globalStyle('ul', {
  paddingLeft: '1.1rem',
});
globalStyle('pre, code', {
  fontFamily: '"Space Mono", monospace',
  fontSize: '0.75rem',
  backgroundColor: '#f4f8fa',
});
globalStyle('pre', {
  padding: '0.75rem 0.25rem 0.25rem 0.25rem',
  borderRadius: '0.5rem',
  marginBottom: '1.5rem',
});
globalStyle('code', {
  padding: '0.1rem 0.2rem 0.1rem 0.2rem',
  margin: '0 0.12rem 0 0.12rem',
  borderRadius: '0.35rem',
  color: 'orange',
});
