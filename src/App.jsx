
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Applayout from './layout/Applayout'
import Homepage from './pages/Homepage/Homepage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import MoviePage from './pages/Movies/MoviePage'
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <Routes>
      <Route path='/' element={<Applayout/>} >
        <Route index element={<Homepage />} />
        <Route path='movies'>
          <Route index  element={<MoviePage />} />
          <Route path=':id' element={<MovieDetailPage />} />
        </Route>
      </Route>
 <Route path="*" element={<NotFoundPage />}/>
    </Routes>
  )
}

export default App
