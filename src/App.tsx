// components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
// pages
import Home from "./pages/Home"
import Store from "./pages/Store"
import Contact from "./pages/Contact"
// rotas
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
// funcao ou componente provider
import {ShoppingCartProvider} from "./context/ShoppingCart"

function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Box sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
