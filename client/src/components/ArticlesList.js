/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import * as User from '../actions/User';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      articles: [],
    };
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.redirectTo = this.redirectTo.bind(this);
    this.getCurrArticles = this.getCurrArticles.bind(this);
    this.props.getArticles();
    //setInterval(, 1000);
  }


  onSearchInputChange = (event) => {
    this.setState({
      searchString: event.target.value.toLowerCase(),
    });
  }

  redirectTo = (article) => {
    this.props.history.push("/articles/" + article + "/");
  }

  getCurrArticles = () => {
    let searchString = this.state.searchString;
    if (searchString === '') {
      return this.props.articles;
    } else {
      let articlesToReturn = [];
      for (let i = 0; i < this.props.articles.length; i++) {
        if (this.props.articles[i].name.toLowerCase().includes(searchString)) {
          articlesToReturn.push(this.props.articles[i]);
          continue;
        }
        if (this.props.articles[i].description.toLowerCase().includes(searchString)) {
          articlesToReturn.push(this.props.articles[i]);
        }
      }
      return articlesToReturn;
    }
    return articlesToReturn;
  }


  render() {
    return (
      <div>
        <div>
          <TextField 
            style={{padding: 6, marginLeft: 18}}
            id="searchInput"
            placeholder="Search for Courses"
            margin="normal"
            onChange={this.onSearchInputChange}
          />
          <Grid container spacing={24} style={{padding: 24}}>
            { 
              this.getCurrArticles().map(({name, description, fileName, img, tags}, idx) => {
                return (
                    <Grid item xs={12} sm={6} lg={4} xl={3} style={{padding: 12}}>
                      <div onClick={() => {this.redirectTo(fileName)}} className="clickable">
                        <Card>
                          <CardMedia 
                            style = {{height: 0, paddingTop: '56.25%'}}
                            image = {img}
                            title = {name}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                              {name}
                            </Typography>
                            <Typography component="p">
                              {description}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small" color="primary" onClick={() => {this.redirectTo(fileName)}}>
                              View Article
                            </Button>
                          </CardActions>
                        </Card>
                      </div>
                    </Grid>
                )
              })
            }
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.user.articles,
});

const mapDispatchToProps = dispatch => ({
  getArticles: () => dispatch(User.getArticles()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  ArticlesList
));
