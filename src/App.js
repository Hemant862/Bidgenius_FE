import './App.css';
import NavBar from './NavBar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Register from './Pages/Register.jsx';
import Adminregister from './Pages/Adminregister.jsx';
import Login from './Pages/Adminlogin.jsx';
import Show from './Pages/showadmin.jsx';
import AdminDash from './Pages/Admindashboard.jsx';
import UserDash from './Pages/Userdashboard.jsx';
import Signin from './Pages/Signin.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import CreateAuctionForm from './Pages/CreateAuctionForm.jsx';
import AuctionDetailsByDateRange from './Pages/AuctionDetailsByDateRange.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
                    <NavBar/>
                              <Routes>
                                <Route path='/home' element={<About/>}></Route>
                                <Route path='/register' element={<Register/>}></Route>
                                <Route path='/Adminregister' element={<Adminregister/>}></Route>
                                <Route path='/login' element={<Login/>}></Route>
                                <Route path='/show' element={<Show/>}></Route>
                                <Route path='/Admindash'element={<AdminDash/>}></Route>
                                <Route path='/Userdash'element={<UserDash/>}></Route>
                                <Route path='/Signin'element={<Signin/>}></Route>
                                <Route path='/dashboard'element={<Dashboard/>}></Route>
                                <Route path='/createauctionform'element={<CreateAuctionForm/>}></Route>
                                <Route path='/Auctiondetailsbydaterange'element={<AuctionDetailsByDateRange/>}></Route>
                              </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
