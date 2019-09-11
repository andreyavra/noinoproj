/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { withRouter, BrowserRouter, Route } from "react-router-dom";
import * as User from '../actions/User';

import Header from '../components/Header';
import ArticlesList from '../components/ArticlesList';

import './cssFiles/Home.scss';
import './cssFiles/Home.css';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      count: 0,
      articles: [],
    };
    this.updateText = this.updateText.bind(this);
    this.props.getName();
    this.props.getArticles();
    //setInterval(, 1000);
  }

  updateText(e) {
    this.setState({
      name: e.target.value,
    });
  }

  redirectTo(article) {
    this.props.history.push("/articles/" + article + "/");
  }


  render() {
    return (
      <div>
        <Header />

        <ArticlesList />

        {/* { 
          this.props.articles.map(({name, description, fileName, img, tags}, idx) => {
            console.log("NAME", name);
            return (
              <div>
                <div>{name}</div>
                <img src={img} alt={name} onClick={() => this.redirectTo(fileName)} className="testing" />
              </div>
            )
            
            console.log(1);
          })
        } */}

        {/* <div className="container_large_white">
          <div className="flex">
            <div className="msbox">
              
              <div className="bottom-left"> 
                <div className = "articletxt">
                  Facebook Informs Data Leak Victims Whether They Need To Burn Down House, Cut Off 
                  Fingerprints, Start Anew
                </div>
              </div>
            </div>
            
            <div className="sidestory1">
              <div className = "bottom-left">
                <div className="articletxt"> 
                ATO HaCCKED
                </div>
              </div>
            </div>

            <div className = "sidestory2">
              <div className = "bottom-left">
                <div className="articletxt"> 
                Apple Announces new product
                </div>
              </div>
              
            </div>

          </div>

        </div> */}
        {/* <input type="text" onChange={this.updateText} />
        <div>Name: {this.state.name}</div>
        <button onClick={() => this.props.setName(this.state.name)}>Click me</button>
        <div>Name: {this.props.name}</div> */}
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
  Home
);
