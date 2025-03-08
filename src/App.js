import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/css/styles.css';
import './assets/css/fonts.css';
import 'materialize-css/dist/css/materialize.min.css';

import Home from './pages/Home';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
