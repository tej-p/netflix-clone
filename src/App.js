import './App.scss';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import {Navbar} from './components/Navbar/Navbar.jsx'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;
