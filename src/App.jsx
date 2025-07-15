import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './components/homePage';
import { Login } from './components/Login';
import { Signup } from './components/Signup';

export const App = () => {
  return (
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
   </BrowserRouter>
  )
}


export default App;