import logo from './logo.svg';
import './App.css';
import PersonalDetails from './components/PersonalDetails';
import ContactDetails from './components/ContactDetails';
import { Routes, Route, Link } from "react-router-dom";
import PreviousAddress from './components/PreviousAddres';
import PreviousAddressDetils from './components/PreviousAddressDetils';
import ThankYouPage from './components/ThankYouPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PersonalDetails />} />
        <Route path="contact-details" element={<ContactDetails />} />
        <Route path='prevAdd' element={<PreviousAddress/>} />
        <Route path='prev-address-details' element={<PreviousAddressDetils/>} />
        <Route path='submit' element={<ThankYouPage/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
