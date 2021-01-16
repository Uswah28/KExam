import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import Dashboard from '../Pages/Dashboard/Dashboard';
import Pendaftaran from '../Pages/Pendaftaran/Pendaftaran';
import Jadwal from '../Pages/Jadwal/Jadwal';

function Routes() {
    return (
        <>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route exact path='/Pendaftaran' component={Pendaftaran} />
            <Route exact path='/Jadwal' component={Jadwal} />
        </Switch>
        </>
    );
}

export default withRouter(Routes);