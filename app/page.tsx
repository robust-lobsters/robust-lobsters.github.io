import { Spacing } from '~/_lib/components/_common/spacing/spacing'
import { Header } from '~/_lib/components/layout/header'
import { PostList } from '~/_lib/components/layout/post-list'

export default async function Page() {
  return (
    <div>
      <Header />
      <Spacing size="2rem" />
      <PostList />
    </div>
  )
}
