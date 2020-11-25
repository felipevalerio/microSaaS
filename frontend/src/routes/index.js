import React from 'react';
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RedirectPage from '../pages/RedirectPage';
import StatsPage from '../pages/StatsPage';
import NotFoundPage from '../pages/NotFoundPage';

// micro.tk/ -> HomePage
// micro.tk/:code -> RedirectPage
// micro.tk/:code/stats -> StatsPage
// exact propriedade para deixar mais
// específico o path da rota

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/:code" component={RedirectPage}/>
                <Route exact path="/:code/stats" component={StatsPage}/>
                <Route exact path="/*" component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;