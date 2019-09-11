/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as User from '../../actions/User';

import Header from '../../components/Header';

import ReactDOM from 'react-dom';


class AppleBad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      articles: [],
    };
    this.props.getArticles();
    this.props.getName();
    //setInterval(, 1000);
  }


  render() {
    return (
      <div>
        <Header />

        <div className="article">
        “Apple releases their new product- the iDialup
        And modern twist on the retro classic
        however this piece of tech will sent you back $1200
        But it’s a small price to pay for the joys of early 2000’s internet
        </div>


        <input type="text" onChange={this.updateText} />
        <div>Name: {this.state.name}</div>
        <button onClick={() => this.props.setName(this.state.name)}>Click me</button>
        <div>Name: {this.props.name}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
  articles: state.user.articles,
});

const mapDispatchToProps = dispatch => ({
  setName: (name) => dispatch(User.setName(name)),
  getName: () => dispatch(User.getName()),
  getArticles: () => dispatch(User.getArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AppleBad
);
