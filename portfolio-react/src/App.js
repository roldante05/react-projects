import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/pages/Inicio";
import Sobremi from "./componentes/pages/Sobremi";
import Proyectos from "./componentes/pages/Proyectos";
import Contacto from "./componentes/pages/Contacto";
import Header from "./componentes/nav/Header";

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
