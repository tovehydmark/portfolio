import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import '../styles/style.scss';

export function Layout() {
  return (
    <>
      <header>
        <Navigation></Navigation>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <p>Tove Hydmark</p>
      </footer>
    </>
  );
}
