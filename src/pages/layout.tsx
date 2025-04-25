import '@/src/_lib/global-style.css';
import { Outlet } from 'react-router';
import { CenterLayout } from '../_lib/components/layout/grid';
import { Nav } from '../_lib/components/layout/nav';

export default function RootLayout() {
  return (
    <CenterLayout>
      <Nav />
      <Outlet />
    </CenterLayout>
  );
}
