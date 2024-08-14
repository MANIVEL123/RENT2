import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import CBEPage from "./Components/LandingPage";
import Pricing from "./Components/Pricing";
import AboutUs from "./Components/AboutUs";
import Admin from "./Components/Admin";
import AdminDash from "./Components/AdminDash";
import CoimbatorePage from "./Components/CoimbatorePage";
import ContactUs from "./Components/ContactUs"; // Ensure this import path is correct
import LandingPage from './Components/LandingPage';
import Chennai from './Components/Chennai';
import Hyderabad from './Components/Hyderabad';
import Pondicherry from './Components/Pondicherry';
import Bangalore from './Components/Bangalore';
import Footer from './Components/Footer';
import AdminLogin from './Components/AdminLogin';
import ChargesToPay from './Components/House1/ChargesToPay';
import PropertyDetails from './Components/House1/PropertyDetails';
import Propertydetailsche from './Components/Chennai/Propertydetailsche';
import AuthProvider from './Components/AuthContext';
import Navbar from './Components/Navbar';
import KanyaKumari from './Components/KanyaKumari';
import AdminPage from './Components/AdminPage';
import Propertydetailsbgr from './Components/Bangalore/Propertydetailsbgr';
import Propertydetailspdy from './Components/pondy/Propertydetailspdy';
import Propertydetailshyd from './Components/hyd/Propertydetailshyd';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<CBEPage />} />
            <Route path="/Home" element={<LandingPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/AdminPage" element={<AdminPage />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/AdminDash" element={<AdminDash />} />
            
           
            <Route path="/CoimbatorePage" element={<CoimbatorePage />} />
            <Route path="/Chennai" element={<Chennai />} />
            <Route path="/Chargesto" element={<ChargesToPay />} />
            <Route path="/Hyderabad" element={<Hyderabad />} />
            <Route path="/Pondicherry" element={<Pondicherry />} />
            <Route path="/Bangalore" element={<Bangalore />} />
            <Route path="/KanyaKumari" element={<KanyaKumari />} />

            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/propertyche/:id" element={<Propertydetailsche />} />
            <Route path="/propertybgr/:id" element={<Propertydetailsbgr />} />
            <Route path="/propertypdy/:id" element={<Propertydetailspdy />} />
            <Route path="/propertyhyd/:id" element={<Propertydetailshyd />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
