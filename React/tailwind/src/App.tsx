import React from 'react';
import './App.css'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <Home/>

      {/*<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>*/}
    </>
  );
}

export default App
