
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-info');
  }

  const toggleMode = (cls)=>{
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    showAlert(`${cls} mode has been enabled`, "success");

    // if(mode === 'light'){
    //   setMode('dark');
    //   document.body.style.backgroundColor = '#042743';
    //   showAlert("Dark mode has been enabled", "success");
    // }
    // else{
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white';
    //   showAlert("Light mode has been enabled", "success");
    // }
  }

  return (
    <>
      <Router>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode = {mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading = "Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode = {mode}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
