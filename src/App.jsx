import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Contact, HomePage, Navbar, Services, Footer } from './components'

function App() {
  

  return (
    <div className='app'>
      <Navbar />
      <div id='phonenumber'>
      <a id='phone-number' href='tel:2243967000'>Call Today! (224) 369-7000</a>
      <p id='spanish'>¡Hablamos Español!</p>
      </div>
      <Routes>
        <Route 
        element={<HomePage />} 
        exact path=''/>
        <Route
        element={<Contact/>}
        exact path='contact'/>
        <Route element={<Services/>}
        exact path='services'/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
