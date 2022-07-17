import './App.css';
import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom';

/**
 * importing app screens
 */
import ComplainsCustomer  from './Screens/complains-customer';   // complains customer screen
import ComplainsShed from './Screens/complains-shed'; // complains sed screen
import ComplainsComplain from './Screens/complains-complain';  //complains details screen 
/**
 * main application function
 * @returns App
 */
function App() {
  return (
    <BrowserRouter>
      <main className="App"> 
       <Routes>
              <Route path="/" element={<ComplainsCustomer/>}/>
              <Route path="/shed" element={<ComplainsShed/>}/>
              <Route path="/complain" element={<ComplainsComplain/>}/> 
       </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
