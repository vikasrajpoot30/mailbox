import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";




import { MailProvider,MailContext } from "./context/MailContext.js";
export {MailContext};




import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>

    <Router>
      <MailProvider>
      <App />
      </MailProvider>
    </Router>
  </StrictMode>
);
