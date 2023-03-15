import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { StartPage } from './components/StartPage';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Layout } from './components/Layout';
import { NotFound } from './components/NotFound';
import { Cv } from './components/Cv';
// import { Burger, Menu } from './components';
import Burger from './components/Burger';
import Menu from './components/Menu';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<StartPage />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="cv" element={<Cv />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default App;
