import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/Dashboard.js'
import Historico from './pages/Historico.js'
import Controle from './pages/Controle.js'
import Cadastro from './pages/Cadastro.js'
import SideBar from './components/SideBar.js'
import TopBar from './components/TopBar.js'
import Footer from './components/Footer.js'
import ModalLogout from './components/ModalLogout.js'


function App() {
  return (
    <Router>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />
            <div className="container-fluid">
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/controle" component={Controle} />
              <Route path="/historico" component={Historico} />
              <Route path="/cadastro" component={Cadastro} />
            </Switch>
            </div>
          </div>
          <Footer />
        </div>
        <ModalLogout />
      </div>
    </Router>
  );
}

export default App;
