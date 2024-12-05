import logo from './logo.svg';
import './App.css';
import Home from './home';
import { Routes, Route } from "react-router-dom"
import Hook from './hook';
import Header from './header';
import HooksTutorial from './hook';
import PropsInfo from './props';
import ReactRouterInfo from './routerinfo';
import ReduxInfo from './redux';


function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="hook" element={ <HooksTutorial/> } />
        <Route path="props" element={ <PropsInfo/>} />
        <Route path="router" element={ <ReactRouterInfo/>} />
        <Route path="redux" element={ <ReduxInfo/>} />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </>
  );
}

export default App;
