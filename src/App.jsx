import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import Pacientes from "../components/ListaPacientes";
import Doctores from "../components/ListaDoctores";

function App() {
  return (
    <div style={{margin: 0, padding: 0, minHeight: "100vh" ,minWidth:"100vw"}}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Pacientes" element={<Pacientes/>} />
        <Route path="/Doctores" element={<Doctores/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;