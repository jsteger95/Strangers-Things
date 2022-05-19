import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navigation/Navbar';


const App = () => {
  return (
        <div>
        <Navbar />
        </div>)
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);