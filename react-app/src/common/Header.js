import React, { Component } from 'react';
import Burger from './Burger';

class Header extends Component {
  getInitialState () {
    return {
      headerTitle: ''
    };
  }
  render() {
    return (
      <div className="header-main">
        <table className="header-parts">
          <tr>
            <td className="header-parts__left"/>
            <td className="header-parts__center">
              {this.props.title}
            </td>
            <td className="header-parts__right">
              <Burger/>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Header;
