// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Shop from './components/pages/Shop'
import Men from './components/pages/Men'
import Women from './components/pages/Women'
import Kids from './components/pages/Kids'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
    </>
  )
}

export default App
