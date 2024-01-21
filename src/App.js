
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./layout/Navbar";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Adduser from "./user/Adduser";
import Edituser from "./user/Edituser";
import Viewuser from "./user/Viewuser";

function App() {
  return (
      <dev>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/adduser" element={<Adduser/>}></Route>
                <Route exact path="/edituser/:id" element={<Edituser/>}></Route>
                <Route exact path="/viewuser/:id" element={<Viewuser/>}></Route>
            </Routes>

      </dev>
  );
}

export default App;
