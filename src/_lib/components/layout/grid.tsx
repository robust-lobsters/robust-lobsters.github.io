import { ComponentProps } from 'react'
import { GRID } from './grid.css'

export function CenterLayout({ ...props }: ComponentProps<'main'>) {
  return <main className={GRID} {...props} />
}
