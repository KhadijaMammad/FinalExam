import MainLayout from "./layouts/MainLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotPage from "./pages/NotPage";
import Home from "./pages/Home";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/notpage" element={<NotPage/>}/>
         
        </Route>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
