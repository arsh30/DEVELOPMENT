import "./App.css";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* Note: navbar ko Routes me nhi likha because we want ki sab pages par visible ho */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          {/* ROUTES FOR CRUD */}
          <Route path="/users/add" element={<AddUser />}></Route>
          <Route path="/users/edit/:id" element={<EditUser/>}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
