import { BrowserRouter } from "react-router-dom";
import App from "./App";

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
