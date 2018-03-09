import React from 'react'
import { Router, Route, Redirect, hashHistory } from "react-router"

import Dashboard from '../dashboard/dashboard'
import Dashboard2 from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/d2' component={Dashboard2} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)