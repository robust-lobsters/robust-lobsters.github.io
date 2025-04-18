import { MD } from '~/_lib/components/md'
import { getUrl, titles, writingsWithFileType } from '~/_lib/util/get-writings'
import type { Metadata, ResolvingMetadata } from 'next'
import { Spacing } from '~/_lib/components/_common/spacing/spacing'
import { BackBtn } from '~/_lib/components/_common/button/back-btn/back-btn'

type Props = {
  params: Promise<{ title: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  return titles.map(t => {
    return {
      title: encodeURIComponent(t),
    }
  })
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
  const matchFile = writingsWithFileType.find(v => v === decodeURIComponent(title))
  const url = getUrl(matchFile ?? '')
  const resp = await fetch(url)
  const md = (await resp.text()) ?? '# 문서 로드에 실패했습니다'

  return (
    <article>
      <BackBtn />
      <Spacing size="4rem" />
      <MD markdownText={md} />
    </article>
  )
}
