import './App.css'
import Crew from './pages/Crew'
import Destination from './pages/Destination'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Technology from './pages/Technology'


function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path='/space-tourism' element={<Home />} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path='/space-tourism/destination' element={<Destination />} />
          <Route path='/space-tourism/crew' element={<Crew />} />
          <Route path='/space-tourism/technology' element={<Technology />} />
        </Routes>
      </div>
    </>
  )
}

export default App
