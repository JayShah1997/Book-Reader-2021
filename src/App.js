import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Books from './pages/Books';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-gradient-to-br from-blue-100 to-gray-200'>
        <div className='container mx-auto py-4'>
          <Navbar />
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/books' component={Books} />
              <Route exact path='*' component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
