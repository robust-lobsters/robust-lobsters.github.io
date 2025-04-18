import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { NAV } from './nav.css'

export function Nav() {
  return (
    <nav className={NAV}>
      <a
        href="https://github.com/robust-lobsters"
        target="_blank"
        rel="nonreferrer noopener noreferrer"
      >
        <GitHubLogoIcon width="1.25rem" height="1.25rem" />
      </a>
    </nav>
  )
}
