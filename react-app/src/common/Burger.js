import React, { Component } from 'react';
import { withRouter } from 'react-router';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [{
    label: 'タスク一覧',
    path: '/'
  }, {
    label: '完了タスク一覧',
    path: '/donetask'
  }, {
    label: 'タスク追加',
    path: '/addtask'
  }
];

const ITEM_HEIGHT = 48;

class Burger extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleToPath = (path) => {
    this.props.history.push(path)
    this.setState({ anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
        <MoreVertIcon/>
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option.label} selected={option.label === 'Pyxis'} onClick={ () => this.handleToPath(option.path) }>
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default withRouter(Burger)
