import SignUp from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/views/Home";
import InitialPage from "./components/views/InitialPage"
import FormsMentor from "./components/views/FormsMentor"
import FormsMentorado from "./components/views/FormsMentorado"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Match from './components/views/Match.jsx'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home" component ={Home}/>
          <Route exact path="/initialPage" component ={InitialPage}/>
          <Route exact path="/Mentor_page" component ={FormsMentor}/>
          <Route exact path="/Mentorado_page" component={FormsMentorado}/>
          <Route exact path="/Match" component={Match}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
