import { MD } from '@/src/_lib/components/md';
import { getUrl, writingsWithFileType } from '@/src/_lib/util/get-writings';
import { Spacing } from '@/src/_lib/components/_common/spacing/spacing';
import { BackBtn } from '@/src/_lib/components/_common/button/back-btn/back-btn';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

export default function Post() {
  const { title } = useParams();
  const navigate = useNavigate();

  const [md, setMd] = useState('# 로딩 중...');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      if (!title) {
        navigate('/');
        return;
      }

      setLoading(true);
      const matchFile = (await writingsWithFileType()).find(v => v.includes(decodeURIComponent(title)));
      const url = getUrl(matchFile ?? '');

      fetch(url)
        .then(resp => resp.text())
        .then(text => setMd(text ?? '# 페이지가 없어요'))
        .catch(() => setMd('# 페이지가 없어요'))
        .finally(() => setLoading(false));
    })();
  }, [title]);

  if (loading) return <div>...</div>;

  return (
    <article>
      <Spacing size="1rem" />
      <BackBtn />
      <Spacing size="2rem" />
      <MD markdownText={md} />
    </article>
  );
}
