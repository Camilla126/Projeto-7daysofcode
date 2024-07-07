import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PaginaDeCadastro } from "./PaginaDeCadastro";
import { NotFound } from "./NotFound";


export const Pages = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PaginaDeCadastro />} />
      <Route path="*" element={<NotFound />} />
    
    </Routes>
  </Router>
);