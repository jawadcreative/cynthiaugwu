import { Route, Routes } from "react-router"
import { Home, AllWork, PlayGround } from "./pages"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<AllWork />} />
      <Route path="/play-ground" element={<PlayGround />} />
    </Routes>
  )
}

export default App