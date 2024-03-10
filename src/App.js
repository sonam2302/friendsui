import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import About from './About';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import FriendsList from './FriendsList';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile/:id" element={<Profile/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/friends" element={<FriendsList/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
