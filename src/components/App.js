import { BrowserRouter } from "react-router-dom";

import Nav from "./layouts/Nav";
import Main from "./layouts/Main";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Main />
    </BrowserRouter>
  );
}

export default App;
