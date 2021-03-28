import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import MainLandingPage from "./views/MainLandingPage"
import Payments from "./views/Payments"
import Pricing from "./views/Pricing"
import NotFound from "./views/NotFound";
import Footer from './components/Layout/Footer'


ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/payments" component={Payments}/>
        <Route exact path="/"component={MainLandingPage}/>
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
,document.getElementById('root'));