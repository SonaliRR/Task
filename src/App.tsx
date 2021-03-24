
// import "./App.css";
// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap";
// import { Button, Form, FormControl } from "react-bootstrap";
// import Login from '../src/components/Login/Login';
// import Registration from '../src/components/Registration/Registration';


// function App({ match }) {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar className="navhead justify-content-between">
//           <Form inline></Form>
//           <Form inline>
//             <Button variant="danger"> <Link to="/login"> <span className="mycolor1" >Login</span></Link></Button>
//             <Button   className="registerbtn" variant="info"><Link to="/registeration"> <span className="mycolor" >Register </span></Link></Button>{' '}
//           </Form>
//         </Navbar>

//         <Route path="/login" render={(props) => <Login {...props} />}></Route>

//         <Route
//           path="/registeration"
//           render={(props) => <Registeration {...props} />}
//         ></Route>

//       </Router>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
function App() {
  return (
    <div className="App">
  <Login/>
    </div>
  );
}

export default App;
