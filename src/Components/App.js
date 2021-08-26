import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import ForgotPassword from "./authentication/ForgotPassword";
import Login from "./authentication/Login";
import PrivateRoute from "./authentication/PrivateRoute";
import Profile from "./authentication/Profile";
import Signup from "./authentication/Signup";
import UpdateProfile from "./authentication/UpdateProfile";
import Dashboard from "./driveComponents/Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Drive Clone Routes */}
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />
          
          {/* Profile/User */}
          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />

          {/* Authentication */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} /> 
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
