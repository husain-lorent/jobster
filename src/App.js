import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error, Landing, ProtecteRoute, Register } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/dashboard/Profile";
import AddJob from "./pages/dashboard/AddJob";
import AllJobs from "./pages/dashboard/AllJobs";
import Stats from "./pages/dashboard/Stats";
import SharedLayout from "./pages/dashboard/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtecteRoute>
              <SharedLayout />
            </ProtecteRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
