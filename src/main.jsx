import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { PubContextProvider } from "./context/PubContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <PubContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PubContextProvider>
  // </StrictMode>
);
