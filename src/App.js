import React from "react";
import HorseProvider from "./Contexts/horseContext";
import { AuthProvider } from "./Services/Auth";
import Router from "./router.js";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <HorseProvider>
        <Router />
        <ToastContainer autoClose={3000} />
      </HorseProvider>
    </AuthProvider>
  );
}

export default App;
