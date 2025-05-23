import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogementProvider } from './context/LogementContext';
import { Home, About, Logement, Error } from "./pages";
import { Header, Footer } from './components';

function App() {
  return (
    <>
      <LogementProvider>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </LogementProvider>
    </>
  );
}

export default App;