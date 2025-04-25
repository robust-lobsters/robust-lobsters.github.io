import { getTitle } from '@/src/_lib/util/get-title';
import { titles } from '@/src/_lib/util/get-writings';
import { POST_LIST, POST_LIST_WRAPPER } from '@/src/_lib/components/layout/post-list.css';
import { useLobstersFriend } from '@/src/_lib/util/use-lobsters-friend';
import { NavLink } from 'react-router';

export function PostList() {
  const friend = useLobstersFriend();
  return (
    <ul className={POST_LIST_WRAPPER}>
      {titles.map((title, i) => (
        <li key={title}>
          <NavLink to={`/${encodeURIComponent(title)}`} className={POST_LIST}>
            <span>{getTitle(title)}</span>
            <span>{friend[i]}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
