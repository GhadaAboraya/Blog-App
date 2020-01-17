import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from  './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Addposts from './Components/Addposts';
import { BrowserRouter , Route } from 'react-router-dom';
import Post from './Components/Post';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Route exact path='/' component={Home} />
        <Route path='/post/:post_id' component={Post} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/addposts' component={Addposts} />
      </div>
    </BrowserRouter>
  );
}

export default App;
