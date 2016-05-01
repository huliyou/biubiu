import React from 'react';
import { Route, IndexRoute } from 'react-router';

import RootContainer from './container/RootContainer';
import AppContainer from './container/AppContainer';

const routes = (
  <Route path="/" component={RootContainer} >
    <Route path="/app" component={AppContainer} />
  </Route>
);

export default routes;
