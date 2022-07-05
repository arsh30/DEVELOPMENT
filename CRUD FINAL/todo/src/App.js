import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Nav from "./components/layout/Nav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/Pages/NotFound";
import AddUser from "./components/users/AddUser";

function App() {
  return (
    <div className="App">
      {/* <h1> Crud application start </h1> */}
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
          <Route exact path="/users/add" element={<AddUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
