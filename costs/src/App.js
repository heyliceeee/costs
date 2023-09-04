import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import Phrase from './components/Phrase';
import List from './components/List';
import Event from './components/Event';
import Form from './components/Form';
import Conditional from './components/Conditional';
import AnotherLists from './components/AnotherLists';
import MyName from './components/MyName';
import { useState } from 'react';
import Salutation from './components/Salutation';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import ContactUs from './pages/ContactUs';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  //const name = "Bruno";
  //const myItems = ['React', 'Vue', 'Angular'];
  //const [name, setName] = useState();


  return (
    //<div className="App">
      //<h1>State Lift</h1>
     // <Phrase/>
      //<SayMyName urname="Alice"/>
     // <SayMyName urname={name}/>
      //<Person photo="https://via.placeholder.com/150" name="Alice" age="21" profession="student"/>
      //<List/> */
      // <Event number="0"/>
      //<Event number="1"/> */
      //<Event/>
      //<Form/> */
      // <Conditional/> */
      // <AnotherLists items={myItems}/>
      //<AnotherLists items={[]}/>
      //<MyName setName={setName}/>
      //<Salutation name={name}/>
    // </div>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;