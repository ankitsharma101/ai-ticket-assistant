import { Routes, Route } from "react-router-dom";
import CheckAuth from "./components/check-auth";
import Tickets from "./pages/tickets";
import TicketDetailsPage from "./pages/ticket";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Admin from "./pages/admin";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth protected={true}>
              <Tickets />
            </CheckAuth>
          }
        />
        <Route
          path="/tickets/:id"
          element={
            <CheckAuth protected={true}>
              <TicketDetailsPage />
            </CheckAuth>
          }
        />
        <Route
          path="/login"
          element={
            <CheckAuth protected={false}>
              <Login />
            </CheckAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <CheckAuth protected={false}>
              <Signup />
            </CheckAuth>
          }
        />
        <Route
          path="/admin"
          element={
            <CheckAuth protected={true}>
              <Admin />
            </CheckAuth>
          }
        />
      </Routes>
    </>
  );
}
