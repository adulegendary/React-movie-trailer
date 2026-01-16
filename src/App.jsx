import { Routes, Route } from "react-router-dom"
import './css/App.css'
import NavBar from "./Compenentes/NavBar"
import Home from "./pages/Home"
import Favorite from "./pages/favorite"
import { MovieProvider } from "./context/MovieContext"

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
