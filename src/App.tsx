import './App.css'
import Crew from './pages/Crew'
import Destination from './pages/Destination'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'


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
        </Routes>
      </div>
    </>
  )
}

export default App
