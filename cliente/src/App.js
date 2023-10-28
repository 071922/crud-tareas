import './App.css';

import ListaTareas from './pages/ListaTareas';
import AgregarTarea from './pages/AgregarTarea';

//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<ListaTareas></ListaTareas>}></Route>
        <Route path='/agregartarea' element={<AgregarTarea></AgregarTarea>}></Route>
      </Routes>
    </Router>
  );
}

export default App;