import Home from './Pages/Home';
import Signin from './Pages/Signin'
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import MemberDashboard from './Pages/Dashboard/MemberDashboard/MemberDashboard.js';
import Allbooks from './Pages/Allbooks';
import Header from './Components/Header';
import Register from './Pages/Register.js';
import AdminDashboard from './Pages/Dashboard/AdminDashboard/AdminDashboard.js';
import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext.js"
import AddBook from './Pages/Dashboard/AdminDashboard/Components/AddBook.js';
import AddTransaction from './Pages/Dashboard/AdminDashboard/Components/AddTransaction.js';
import GetMember from './Pages/Dashboard/AdminDashboard/Components/GetMember.js';
import AddMember from './Pages/Dashboard/AdminDashboard/Components/AddMember.js';
import ReturnBook from './Pages/Dashboard/AdminDashboard/Components/Return.js';
import Editform from './Pages/Dashboard/AdminDashboard/Components/Editform.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

function App() {

  const { user } = useContext(AuthContext)

  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/signin'>
            {user ? (user.isAdmin ? <Redirect to='/dashboard@admin' />:<Redirect to='/dashboard@member' />) : <Signin />}
          </Route>
          <Route exact path='/dashboard@member'>
            {user ? (user.isAdmin === false ? <MemberDashboard /> : <Redirect to='/' />) : <Redirect to='/' />}
          </Route>
          <Route exact path='/dashboard@admin'>
            {user ? (user.isAdmin === true ? <AdminDashboard /> : <Redirect to='/' />) : <Redirect to='/' />}
          </Route>
          <Route exact path='/books'>
            <Allbooks />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/addbook'>
            <AddBook />
          </Route>
          <Route exact path='/addtransaction'>
            <AddTransaction />
          </Route>
          <Route exact path='/edit/:id'>
            <Editform />
          </Route>
          <Route exact path='/getuser'>
            <GetMember />
          </Route>
          <Route exact path='/adduser'>
            <AddMember />
          </Route>
          <Route exact path='/returnbook'>
            <ReturnBook />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;