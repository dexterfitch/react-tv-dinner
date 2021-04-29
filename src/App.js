import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/create';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import withAuth from './components/auth/withAuth';

function App() {
  return ( 
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/create' component={withAuth(Create)} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;