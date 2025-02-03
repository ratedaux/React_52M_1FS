import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//---Lesson 13
import Layout from './components/Layout/Layout'
import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Users from './pages/Users/Users'
// import Homework10 from "./homeworks/Homework10/Homework10"
// import Lesson11 from './lessons/Lesson11/Lesson11'

function App() {
  return (
    //BrowserRouter - компонент из react-router-dom, который позволяет нам работать с маршрутами
    // по всему приложению
    <BrowserRouter>
    <GlobalStyles/>
<Layout>
        {/* Routes - собирает все маршруты приложения */}
        <Routes>
         {/* Route - компонент, в который передаётся маршрут и контент, 
         который нужно отрисовать по этому маршруту в Layout */}
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/users' element={<Users/>}/>
        </Routes>
      </Layout>
    
    </BrowserRouter>
  )
}

export default App