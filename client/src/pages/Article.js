/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as User from '../actions/User';

import Header from '../components/Header';

import ReactDOM from 'react-dom';

import './cssFiles/Article.css';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      articles: [],
    };
    this.props.getArticles().then(() => {
      console.log(this.props.articles);
    });
    this.props.getName();
    //setInterval(, 1000);
  }


  render() {
    console.log("LOGGING IN ARTICLE.JS THE LOADARTICLE THING:",this.props.loadArticle(this.props.match.params.name));
    return (
      <div>
        <Header />
        {
          this.props.loadArticle(this.props.match.params.name)
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.user.articles,
});

const mapDispatchToProps = dispatch => ({
  setName: (name) => dispatch(User.setName(name)),
  loadArticle: (articleName) => dispatch(User.loadArticle(articleName)),
  getName: () => dispatch(User.getName()),
  getArticles: () => dispatch(User.getArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Article
);
