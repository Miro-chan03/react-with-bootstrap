import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Home, About, Contacts } from "./pages";
import Navigation from "./components/Navigation"

function App() {
  return (
    <>
    <Navigation />
      <h1>React</h1>;
      <Home />
      <About />
      <Contacts />
    </>
  );
}


export default App;