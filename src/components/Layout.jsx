import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import '../styles/style.scss';

export function Layout() {
  return (
    <>
      <Navigation></Navigation>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <p>©Tove Hydmark 2023</p>
      </footer>
    </>
  );
}
