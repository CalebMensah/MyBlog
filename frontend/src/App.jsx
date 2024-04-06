import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import SignIn from './pages/SignIn.tsx'
import SignUp from './pages/SignUp.tsx'
import DashBoard from './pages/DashBoard.tsx'
import Projects from './pages/Projects.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}
