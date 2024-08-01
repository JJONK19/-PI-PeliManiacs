import { BrowserRouter, Route, Routes } from "react-router-dom"
import Catalog from "./components/Catalog/Catalog"
import Footer from "./components/Footer/Footer"
import Barra from "./components/Barra/Barra"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Profile from "./components/Profile/Profile"
import Item from "./components/Catalog/Items/Item"
import Logout from "./components/Logout/Logout"

function App() {

  return (
    <BrowserRouter>
      <Barra />
      <Routes>
        <Route exact path="/" element={<Catalog />} />
        <Route exact path="/details/:id" element={<Item />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App