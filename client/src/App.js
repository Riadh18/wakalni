import Nav from './Components/Nav';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Register from './Components/Register';


function App() {
  return (
    <div>
      <Nav/>
      
      


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>


      </Routes>
    </div>
  );
}

export default App;
