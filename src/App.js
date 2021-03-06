import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import MainPage from "./components/views/MainPage";
import Services from "./components/views/Services";
import './Reset.css'
import './App.css'
import Logo from "./images/logo.png";
import CustomLink from "./components/views/CustumLink";
import NavBar from "./components/views/NavBar";


const App = () => {
  return (
      <>
          <BrowserRouter>
              <div className='container'>
                  <div className='navBarMenu'>
                      <Link to="exadel-project">
                          <img style={{width: 100}} src={Logo} alt="SecurityLogo"/>
                      </Link>
                      < NavBar className='nav-menu'/>
                      <nav>
                          <CustomLink  to="/exadel-project" >Main</CustomLink>
                          <CustomLink  to="/exadel-project/services">Services</CustomLink>
                      </nav>
                  </div>
                  <Routes>
                      <Route path="/exadel-project" exact element={<MainPage/>}/>
                          <Route path="/exadel-project/services" element={<Services/>}/>
                  </Routes>
                  <footer className='footer'>
                      <p> Made by Keti Mokhevishvili 31/05/2022</p>
                      <br/>
                          <p>
                              for exadel's company
                          </p>
                  </footer>
              </div>
          </BrowserRouter>
      </>
  );
}

export default App;
