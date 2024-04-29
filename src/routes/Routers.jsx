import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Greeners from "../pages/Greeners/Greeners";
import GreenerDetails from "../pages/Greeners/GreenerDetails";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/greener-account/Dashboard";
import CheckoutSuccess from "../pages/Greeners/CheckoutSuccess";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/greeners" element={<Greeners />} />
      <Route path="/greeners/:id" element={<GreenerDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/greeners/profile/me"
        element={
          <ProtectedRoute allowedRoles={["greener"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
