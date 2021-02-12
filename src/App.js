import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from 'pages/homepage';
import Footer from 'components/footer';
import Header from 'components/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
