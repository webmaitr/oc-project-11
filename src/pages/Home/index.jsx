import {BrowserRouter, Routes, Route} from "react-router-dom";
import Apropos from './../A-propos/Apropos.jsx'
import Home from './../Home/Home.jsx'
import PageNotFound from './../404/PageNotFound.jsx'
import Header from './../../components/Header.jsx'
import Footer from './../../components/Footer.jsx'
import "./../../style/App.css"



function App() {
  

  return (
    <>
    

    <BrowserRouter>
    <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/a-propos" element={<Apropos/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </div>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
