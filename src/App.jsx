import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HelloWorld from './HelloWorld'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

return (
    <>
     <BrowserRouter>
      <HeaderComponent/>
        <Routes>
            {/* //http://localhost:3000 */}
            <Route path='/' element={ <ListEmployeeComponent/> }></Route>

            {/* //http://localhost:3000/employees */}
            <Route path='/employees' element={ <ListEmployeeComponent/> }></Route>
        </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
