import {
  USER_NAME_SET,
  USER_NAME_GET,
  ARTICLES_GET,
  LOAD_ARTICLE
} from '../actions/actionTypes';

const initial_state = {
  name: '',
  articles: [],
  articleContent: '',
};

const user = (state = initial_state, action) => {
  switch (action.type) {
    case USER_NAME_SET:
      return Object.assign({}, state, {
        name: action.body.data.name,
      });
    case USER_NAME_GET:
      return Object.assign({}, state, {
        name: action.body.data.name,
      });
    case ARTICLES_GET:
      console.log(action.body.data.articles);
      return Object.assign({}, state, {
        articles: action.body.data.articles,
      });
      case LOAD_ARTICLE:
        console.log("In user.js, in case LOAD_ARTICLE, loading action.body.data::", action.body.data);
        return Object.assign({}, state, {
          articleContent: action.body.data,
        });
    default:
      return state;
  }
}

export default user;