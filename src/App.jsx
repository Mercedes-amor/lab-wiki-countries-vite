import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CountryDetails from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>

      <Navbar />
      
      

      <Routes>
        <Route path="/" element={<HomePage />}>HomePage</Route>
        <Route path="/:countryId" element={<CountryDetails />}>Country Details</Route>


      </Routes>
    </div>
  );
}

export default App;
