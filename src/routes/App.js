import React from 'react';
import {BrowserRouter, Swith, Route} from 'react-router-dom'; 
import Login from '../components/Login';
import Main from '../pages/Main.jsx';


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/" component={Main} />
    </BrowserRouter>
  );
}

export default App;
