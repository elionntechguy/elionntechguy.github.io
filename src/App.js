import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [work, setWork] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.all([
      axios.get('https://elionnsportfoliobackendapp1.herokuapp.com/api/work'),
    ])
    .then(axios.spread((workRes) => {
      setWork(workRes.data);
      setLoading(false);
    }));
  }, []);

  return (
    <Router>
      <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" render={(props) => <Work {...props} work={work} loading={loading} />} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
