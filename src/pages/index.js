import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importing other components
import Resetpassword from "../components/auth/resetPassword";
import Dashboard from "./dashboard";
import Login from "./login";
import Signup from "./signup"
import Forgotpassword from "./forgotpassword";
import Toast from "../components/common/toaster";
import PropertyDetails from "./propertyDetails";
import Profile from "./profile";
import Bookings from "./bookings";
import Orders from "./orders";
import Wishlist from "./wishlist";
import MyProperties from "./myProperties";
import Property from "./property";
import SuccessModalDialog from "./successModal/successModal";



const AllPages = () => {
  return (
    <>
     <Toast />
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/property-details/:id" element={<PropertyDetails/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/details/:id" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/resetpassword/:token" element={<Resetpassword/>}/>
        <Route exact path="/forgotPassword" element={<Forgotpassword/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/bookings" element={<Bookings/>}/>
        <Route exact path="/orders" element={<Orders/>}/>
        <Route exact path="/wishlist" element={<Wishlist />}/>
        <Route exact path="/properties" element={<MyProperties />}/>
        <Route exact path="/property/:id" element={<Property />}/>
        <Route exact path="/success" element={<SuccessModalDialog />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AllPages;
