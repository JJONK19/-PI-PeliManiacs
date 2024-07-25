import { BrowserRouter, Route, Routes } from "react-router-dom"
import Catalog from "./components/Catalog/Catalog"
import Footer from "./components/Footer/Footer"
import Barra from "./components/Barra/Barra"

function App() {

  return (
    <BrowserRouter>
      <Barra />
      <Routes>
        <Route exact path="/" element={<Catalog />} />
        <Route exact path="/login" element={<Catalog />} />
        <Route exact path="/register" element={<Catalog />} />
        <Route exact path="/profile" element={<Catalog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
