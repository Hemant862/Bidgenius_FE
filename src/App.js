import './App.css';
import NavBar from './NavBar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Register from './Pages/Register.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
                    <NavBar/>
                              <Routes>
                                <Route path='/home' element={<About/>}></Route>
                                <Route path='/register' element={<Register/>}></Route>
                              </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
