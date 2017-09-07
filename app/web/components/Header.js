import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

export default class Header extends Component {
  render() {
    return (
      <AppBar
          title="L2 Support Analysis"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
    );
  }
}
