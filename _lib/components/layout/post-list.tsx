'use client'
import Link from 'next/link'
import { getTitle } from '~/_lib/util/get-title'
import { titles } from '~/_lib/util/get-writings'
import { POST_LIST, POST_LIST_WRAPPER } from '~/_lib/components/layout/post-list.css'
import { useLobstersFriend } from '~/_lib/util/use-lobsters-friend'

export function PostList() {
  const friend = useLobstersFriend()
  return (
    <ul className={POST_LIST_WRAPPER}>
      {titles.map((title, i) => (
        <li key={title}>
          <Link href={`/${encodeURIComponent(title)}`} className={POST_LIST}>
            <span>{getTitle(title)}</span>
            <span>{friend[i]}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
