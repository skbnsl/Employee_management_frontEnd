import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HelloWorld from './HelloWorld'
import {BrowserRouter, Routes} from 'react-router-dom';

function App() {

return (
    <>
     <BrowserRouter>
      <HeaderComponent/>
        <Routes></Routes>
      <ListEmployeeComponent/>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
