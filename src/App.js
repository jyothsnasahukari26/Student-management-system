import { BrowserRouter, Routes, Route }
from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Students from './pages/Students';
import StudentDetail from './pages/StudentDetail';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/about'
          element={<About />}
        />

        <Route
          path='/students'
          element={<Students />}
        />

        <Route
          path='/students/:id'
          element={<StudentDetail />}
        />

        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}