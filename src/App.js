
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Appbar from "./component/Appbar";
import {Stu} from "./component/Stu";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";


function App() {
  return (
      <div>
        <Navbar/>
          <Home/>
      </div>
      /*
    <div className={"h-56 grid grid-rows-0.1 gap-4 content-between ..."} >
      <Appbar/>
        <Stu/>
    </div>*/
  );
}

export default App;
