import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { StartPage } from './components/StartPage';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Layout } from './components/Layout';
import { NotFound } from './components/NotFound';
import { Cv } from './components/Cv';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
