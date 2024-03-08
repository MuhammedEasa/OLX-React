import React, { useEffect,useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext';
import { AuthContext, FirebaseContext } from './store/Context';
function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
   firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
   })
  })
  return (
    <div>
      <Post>
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route  path={'/signup'} component={Signup} />
          <Route  path={'/login'} component={Login} />
          <Route  path={'/create'} component={Create} />
          <Route  path={'/view'} component={View} />
        </Switch>
      </Router>
      </Post>
    </div>
  );
}

export default App;
