import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apropos from './../A-propos/Apropos.jsx';
import Home from './../Home/Home.jsx';
import PageNotFound from './../404/PageNotFound.jsx';
import FicheLogement from './../FicheLogement/FicheLogement.jsx'
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<Apropos />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/FicheLogement/:id" element={<FicheLogement />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
