import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Row1 from "./Components/Row1";
import Stud from "./Components/Stud";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from "./Components/Login";
//import Regotp from "./Components/Regotp";
import Addmenu from "./Components/Addmenu";

function App() {
  return (
  <>
  <Router>
  <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
  data-sidebar-position="fixed" data-header-position="fixed">
    <Navbar></Navbar>
    <div className="body-wrapper">
    <Header></Header>
    <Routes>
      <Route path="/Stud" element={<Stud></Stud>}></Route>
      <Route path="/Dash" element={<Row1></Row1>}></Route>
      {/* <Route path="/AddMenu" element={<Regotp></Regotp>}></Route> */}
      <Route path="/AddMenu" element={<Addmenu></Addmenu>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
      
    </Routes>
    
    </div>
  </div>
  </Router>
  <script src="../assets/libs/jquery/dist/jquery.min.js"></script>
  <script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="../assets/js/sidebarmenu.js"></script>
  <script src="../assets/js/app.min.js"></script>
  <script src="../assets/libs/apexcharts/dist/apexcharts.min.js"></script>
  <script src="../assets/libs/simplebar/dist/simplebar.js"></script>
  <script src="../assets/js/dashboard.js"></script>
  </>
  );
}

export default App;
