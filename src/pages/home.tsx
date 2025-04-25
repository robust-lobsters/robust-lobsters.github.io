import { Spacing } from '@/src/_lib/components/_common/spacing/spacing';
import { Header } from '@/src/_lib/components/layout/header';
import { PostList } from '@/src/_lib/components/layout/post-list';

export default function Home() {
  return (
    <div>
      <Header />
      <Spacing size="2rem" />
      <PostList />
    </div>
  );
}
