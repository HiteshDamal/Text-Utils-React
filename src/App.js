import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import PropTypes from 'prop-types';
import TextForm from './components/TextForm'; 
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const[mode,setMode] =useState('light')
  // const[btnstyle,setbtnstyle]=useState('enable dark mode')
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='#001751'
      showAlert("Dark mode has been enable","success")
      
       }
       else{
      setMode('light')
      document.body.style.backgroundColor ='white'
      showAlert('light mode has been enable','success')
      
     
      
    }
  }
  const[alert,setAlert]=useState(null)



    const showAlert=(message,type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000);
    }
  return (
    <>
     <Router>
    <Navbar  title="Textutil" abouttext="About" mode={mode} toggleMode={toggleMode} />
    
    <Alert alert={alert} />
    <div className='container my-3'>
    {/* <TextForm showAlert={showAlert} heading="this is my heading"  mode={mode} /> */}
   <Routes>
   
   
     <Route exact path="/"
         element={ <TextForm showAlert={showAlert} heading="Try TextUtils-Word counter,Character counter,Email Extractor"  mode={mode} />}>
           
          </Route>
          <Route exact path="/about"
          element={<About mode={mode}/>}>
            
          </Route>
          
          
    </Routes>  
    
   
    </div>
    </Router>
 
    </>
    
    
    
    
  );
}

export default App;
