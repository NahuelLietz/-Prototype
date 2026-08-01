import { Routes, Route } from "react-router-dom"
import Home from "./Home.jsx"
import {Register} from "./Register.jsx"

function PathControl() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default PathControl