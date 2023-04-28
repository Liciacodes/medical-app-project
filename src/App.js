import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Patients } from "./pages/Patients";
import { Overview } from "./components/Overview";
import { Map } from "./pages/Map";
import { Departments } from "./pages/Departments";
import { Doctors } from "./pages/Doctors";
import { History } from "./pages/History";
import { Settings } from "./pages/Settings";
import Layout from "./components/shared/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Overview />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/map" element={<Map />} />
          <Route path="department" element={<Departments />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/login" element={<div>This is the log in page</div>} />
      </Routes>
    </>
  );
}

export default App;
