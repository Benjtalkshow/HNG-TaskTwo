import './App.css';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies'

function App() {
  return (
    <div className="App">
      {/* <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies/:id" exact component={Movies} />
      </Switch>
    </Router> */}
      <Home />
      <Movies />
    </div>
  );
}

export default App;
