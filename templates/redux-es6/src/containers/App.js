import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlanetActions from '../actions/planets';
import io from 'socket.io-client';
import DevTools from './DevTools';
import { List } from 'immutable-props';
import { createSelector } from 'reselect';
import {
  ImmutableComponent,
  PlanetList
} from '../components/index';

class App extends ImmutableComponent {
  socket;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fetch planets from server
  }

  render() {
    const { planets } = this.props;
    return (
      <div>
        <PlanetList planets={planets} />
        <DevTools />
      </div>
    );
  }
}

App.propTypes = {
  planets: List
};

const mapStateToProps = (state) => {
  return {
    planets: state.planets
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PlanetActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);