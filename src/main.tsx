
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(

  <BrowserRouter>
    <div><a>あっはっは！</a></div>
    <AppRoutes />
  </BrowserRouter>,
);