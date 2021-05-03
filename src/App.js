import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/create';
import MyTvdinnerList from './components/MyTvdinnerList';
import TvdinnerList from './components/TvdinnerList';
import Signup from './containers/auth/Signup';
import Login from './containers/auth/Login';
import withAuth from './containers/auth/withAuth';

function App() {
  return ( 
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/create' component={withAuth(Create)} />
          <Route exact path='/mytvdinners' component={withAuth(MyTvdinnerList)} />
          <Route exact path='/tvdinners' component={withAuth(TvdinnerList)} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;