import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import BaseComponent from './common/BaseComponent';

class NavBar extends BaseComponent {
  constructor() {
    super();
    this._bind('handleKeyPress');
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.history.push(`/search/${document.getElementById('search').value}`);
    }
  }

  render() {
    return (
      <nav className="sidebar">
        <ul>
          <li className="logo"><Link to="/"><img height="30" src="/assets/images/slant-logo.svg" /></Link></li>
          <li className="logo mobile"><Link to="/"><img height="20" src="/assets/images/slant-logo.svg" /></Link></li>
          <li className="search"><i className="ion-ios-search-strong" /><input id="search" onKeyPress={this.handleKeyPress} placeholder="Search for a movie or series..." type="text" /></li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(NavBar);
