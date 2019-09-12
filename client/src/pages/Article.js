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
      currentArticlesContent: '',
    };
    this.props.getArticles().then(() => {
      console.log(this.props.articles);
    });
    this.props.getName();
    this.props.getArticles();
    this.getCorrespArticle = this.getCorrespArticle.bind(this);
    //setInterval(, 1000);
  }

  // getCorrespArticle = (articleRequested) => {
  //   this.props.loadArticle(articleRequested)
  //   .then((contents) => {
  //     console.log("LOGGIN CONTENTS", contents);
  //     return contents;
  //   })
  // }

  getCorrespArticle = (articleRequested) => {
    console.log("LOGGING STUFF IN GETCOORESPARTICLE:", articleRequested, this.props.articles);
    for (let i = 0; i < this.props.articles.length; i++) {
      // console.log("LOGGING ARTICLES[i], ARTICLE.ARTICLECONTENT:", this.props.articles[i], this.props.articles[i].articleContent);
      if (this.props.articles[i].fileName === articleRequested) {
        // console.log("LOGGING ARTICLES[i], ARTICLE.ARTICLECONTENT IN IF STATEMENT:", this.props.articles[i], this.props.articles[i].articleContent);
        console.log("NOW RETURNING>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        return this.props.articles[i];
      }
    }
    return "No article found";
  }


  render() {
    console.log("LOGGING PROPS:", this.props);
    console.log("LOGGING PARAMS:", this.props.match.params);
    console.log("LOGGIN PARAMS.NAME:", this.props.match.params.name);
    console.log("LOGGIN PARAMS.NAME THROUGH GET CORRESP:", this.getCorrespArticle(this.props.match.params.name))
    // console.log("this.props.loadArticle(this.props.match.params):", this.props.loadArticle(this.props.match.params));
    // console.log("this.props.loadArticle(this.props.match.params.articleContent):", this.props.loadArticle(this.props.match.params.articleContent));
    // console.log("this.props.loadArticle(this.props.match.params.name):", this.props.loadArticle(this.props.match.params.name));
    return (
      <div>
        <Header />
        <div style={{marginTop: 70}}>
        {
          this.getCorrespArticle(this.props.match.params.name).articleContent
          // this.props.loadArticle(this.props.match.params)
        }
        </div>
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
