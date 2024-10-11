import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { PubContextProvider } from "./context/PubContext";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <PubContextProvider>
    <App />
  </PubContextProvider>
  // </StrictMode>
);
