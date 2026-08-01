import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import Home from "./Home.jsx"
import {Register} from "./Register.jsx"

function PathControl() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1>Página no encontrada</h1>} />
    </Routes>
  )
}

export default PathControl