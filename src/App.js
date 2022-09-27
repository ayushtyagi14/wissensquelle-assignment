import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Email from './components/Email/Email';
import Verification from './components/Verification/Verification';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Email />} />
          <Route path='/verification' element={<Verification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
