import Link from 'next/link'
import { Spacing } from '~/_lib/components/_common/spacing/spacing'
import { Header } from '~/_lib/components/layout/header'
import { getTitle } from '~/_lib/util/get-title'
import { titles } from '~/_lib/util/get-writings'
import { POST_LIST, POST_LIST_WRAPPER } from './page.css'

export default async function Page() {
  return (
    <div>
      <Header />
      <Spacing size="2rem" />
      <ul className={POST_LIST_WRAPPER}>
        {titles.map(title => (
          <li key={title} className={POST_LIST}>
            <Link href={`/${encodeURIComponent(title)}`}>{getTitle(title)}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
