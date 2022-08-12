import { LiveTour } from 'live-tour-lab';
import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import Hero from './hero';

export default class my_project_360 extends React.Component {
  render() {
    return (
      <LiveTour tourURI='hello-world.json' >
        <Hero entries="heroes" />
      </LiveTour>
    );
  }
};

AppRegistry.registerComponent('my_project_360', () => my_project_360);
