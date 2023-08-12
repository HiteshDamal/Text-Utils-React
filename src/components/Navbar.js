import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(prop) {
  // about us enable dark mode
  // const[btnstyle,setbtnstyle]=useState('enable light mode')
  // if(prop.mode==='light'){
  //   setbtnstyle('enable dark mode')
  // }else {
  //   setbtnstyle('enable light mode')
  // }


  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${prop.mode}  bg-${prop.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{prop.title}</Link>
    {/* <a className="navbar-brand" href="#">{prop.title}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{prop.abouttext}</Link>
          {/* <a className="nav-link" href="/about">{prop.abouttext}</a> */}
        </li>
       
      </ul>
  
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary " type="submit">Search</button>
      </form> */}
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={prop.toggleMode}/>
  <label className= {`form-check-label text-${prop.mode==='light' ?'dark':'light'}`} for="flexSwitchCheckDefault">Enable dark mode</label>
</div>
    </div>
  </div>
</nav>
      
    </div>
  )
}
Navbar.propTypes = {
    title: PropTypes.string,
    abouttext:PropTypes.string
  };
// Navbar.propTypes = {
//     children: PropTypes.element.isRequired
//   };
  