import { Routes, Route, BrowserRouter } from "react-router-dom"
import { MainPage } from "./components/MainPage"
import SoloMovie from "./components/SoloMovie"
function App() {

  return (
    <>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/movies/:id" element={<SoloMovie/>}></Route>
        </Routes>
  </BrowserRouter>
    </>
  )
}

export default App

