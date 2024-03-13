import React from 'react';
//import styles from './App.css';
import { Route,Routes } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import { AuthProvider } from './Token/AuthContext.js';
//import Header from './components/Header';
import Student from './components/Student.js';
import Parent from './components/Parent';
import Footer from './components/Footer';
import Visitors from './components/Visitors';
import Counsellor from './components/Counsellor';
import Home from './components/Home.js'
import ResponsiveAppBar from './components/Nav';
import ContactUs from './components/ContactUs';
import Login from './components/Login.js';
import Appointment from './components/Appointment.js';
import Filter from './components/Filter.js';
import CounsellorDetails from './components/CounsellorDetails.js';
import Logout from './components/Logout';
import SendMail from './components/SendMail.js'

const App = () => {
  return (
    <AuthProvider>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
    <ResponsiveAppBar/>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="home" element={<Home/>} />
      <Route path="Student" element={<Student/>} />
      <Route path="Counsellor" element={<Counsellor/>} />
      <Route path="Parent" element={<Parent/>} />
      <Route path="Visitor" element={<Visitors/>} />
      <Route path="ContactUs" element={<ContactUs/>} />
      <Route path='Filter' element={<Filter/>}/>
      <Route path="Login" element={<Login/>} />
      <Route path='Logout' element={<Logout/>} />
      <Route path="Appointment" element={<Appointment/>}/>
      <Route path='CounsellorDetails' element={<CounsellorDetails/>}/>
      <Route path='SendMail' element={<SendMail/>}/>
    </Routes><br/>
    <Footer/>
    </AuthProvider>
  );
};

export default App;