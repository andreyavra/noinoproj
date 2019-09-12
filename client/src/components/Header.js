import React from 'react';
import { Link } from 'react-router-dom';
import SubHeader from './SubHeader';
import { withRouter } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subhead: false,
    };
    this.goHome = this.goHome.bind(this);
  }

  goHome = () => {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <AppBar color="primary">
          <Toolbar>
            <div className="slogan">
              <Typography variant="inherit" color="inherit">
                most trusted tech news
              </Typography>
            </div>
            <div className="clickable title" onClick={() => {this.goHome()}}>
              <Typography variant="h4" color="inherit">
                NOINO
              </Typography>
            </div>
            <div className="loginBar">
              <Typography variant="inherit" color="inherit">
                <div className="clickable">Sign Up | Log In</div>
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>


    );
  }
}

export default withRouter(Header);
