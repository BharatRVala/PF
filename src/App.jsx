import { Route, Routes } from 'react-router-dom';
import Home from './pagees/Home';
import About from './pagees/About';
import Contact from './pagees/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow pt-16">
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/home' element={<Home />} /> 
          <Route path='/about' element={<About />} /> 
          <Route path='/contact' element={<Contact />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;