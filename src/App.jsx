import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogementProvider } from './context/LogementContext';
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Error404 from "./pages/Error404";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  console.log("App rendu !");
  return (
    <>
      <LogementProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </LogementProvider>
    </>
  );
}

export default App;