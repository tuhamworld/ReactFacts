import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './Components/Main.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div className="container">
        <Navbar/>
      <Main />
      <Footer/>
    </div>
  </React.StrictMode>,
)
