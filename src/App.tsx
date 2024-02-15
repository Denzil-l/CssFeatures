import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/HomePage/Home"
import { Navigation } from "./components/Navigation/Navigation"
import { Test } from "./components/Test/Test"
import { FirstPage } from "./pages/FirstPage/FirstPage"

function App() {

  return (
    <div className="wrapper">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<FirstPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  )
}

export default App
