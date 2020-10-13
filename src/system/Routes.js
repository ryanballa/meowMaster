import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import NotFound from './NotFound';
import Cleanings from '../cleanings/Cleanings';
import Stats from '../stats/Stats';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/stats" />} />
      <Route exact path="/cleanings" component={Cleanings} />
      <Route exact path="/stats" component={Stats} />
      <Route component={NotFound} />
    </Switch>
  );
};

Routes.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Routes);
