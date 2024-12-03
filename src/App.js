import logo from './logo.svg';
import './App.css';
import Home from './home';
import { Routes, Route } from "react-router-dom"
import Hook from './hook';
import Header from './header';


function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="hook" element={ <Hook/> } />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </>
  );
}

export default App;
