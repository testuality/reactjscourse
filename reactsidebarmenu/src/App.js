import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/products" component={Products}/>
          <Route path="/reports" component={Reports}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
