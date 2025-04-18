import { MD } from '~/_lib/components/md'
import { titles, writingsData } from '~/_lib/util/get-writings'
import type { Metadata, ResolvingMetadata } from 'next'
import { Spacing } from '~/_lib/components/_common/spacing/spacing'
import { BackBtn } from '~/_lib/components/_common/button/back-btn/back-btn'

type Props = {
  params: Promise<{ title: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  return titles.map(t => ({ title: encodeURIComponent(t) }))
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { title } = await params
  const previousImages = (await parent).openGraph?.images || []
  const decodedParam = decodeURIComponent(title).split('-').join(' ')
  const TITLE = `${decodedParam} - robust-lobsters`

  return {
    title: TITLE,
    openGraph: {
      images: [...previousImages],
    },
  }
}
export default async function Page({ params }: Props) {
  const { title } = await params
  const decodedTitle = decodeURIComponent(title)

  const url = writingsData[decodedTitle]

  const md = await fetch(url)
    .then(r => r.text())
    .catch(() => '# 문서를 로드하는 데 실패했습니다')

  return (
    <article>
      <Spacing size="1rem" />
      <BackBtn />
      <Spacing size="2rem" />
      <MD markdownText={md} />
    </article>
  )
}
