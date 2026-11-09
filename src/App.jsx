
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Pokemon from './pages/Pokemon'
import NotFound from './pages/NotFound'

import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </>
  )
}

export default App
