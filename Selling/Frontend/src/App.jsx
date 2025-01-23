import MainLayout from "./layouts/MainLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotPage from "./pages/NotPage";
import Home from "./pages/Home";
import Add from "./pages/AddPage/Add";
import Detail from "./pages/Detail";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/notpage" element={<NotPage/>}/>
         
        </Route>
        <Route path="/add" element={<Add/>}>
        
        </Route>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
