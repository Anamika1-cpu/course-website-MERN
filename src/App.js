import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Request from './components/Request/Request';
import Subscribe from './components/Payment/Subscribe/Subscribe';
import NotFound from './components/Layout/NotFound/NotFound';
import PaymentFail from './components/Payment/PaymentFail/PaymentFail';
import PaymentSuccess from './components/Payment/PaymentSuccess/PaymentSuccess';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import ChangePassword from './components/Profile/ChangePassword';

const App = () => {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request" element={<Request />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        <Route path="/paymentFail" element={<PaymentFail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
