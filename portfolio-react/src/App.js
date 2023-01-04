import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Sobremi from "./componentes/Sobremi";
import Proyectos from "./componentes/Proyectos";
import Contacto from "./componentes/Contacto";
import Header from "./componentes/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Header />}>
            **<Route index element={<Inicio />}></Route>**
          <Route path="sobre-mi" element={<Sobremi />}></Route>
          <Route path="proyectos" element={<Proyectos />}></Route>
          <Route path="contacto" element={<Contacto />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
