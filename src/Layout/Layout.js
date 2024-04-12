import React from 'react'
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Logout from '../components/Logout/Logout';
import Details from '../components/Details/Details';


function Layout() {
  return (
    <>
        <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/logout' element={<Logout/>}/>
                    <Route path='/details/:id' element={<Details/>}/>

                </Routes>
 
                <Footer/>
        
        </Router>

      
    </>
  )
}

export default Layout
