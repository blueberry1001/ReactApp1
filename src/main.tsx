
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <BrowserRouter basename={import.meta.env.DEV ? "/" : "/ReactApp1/"}>
    <AppRoutes />
  </BrowserRouter>,
);