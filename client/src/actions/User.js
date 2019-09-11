import {
  USER_NAME_GET,
  USER_NAME_SET,
  ARTICLES_GET,
  LOAD_ARTICLE
} from './actionTypes';

export function getName() {
  return {
    type: USER_NAME_GET,
    fetch: {
      url: `/api/name/get`,
      body: {
      },
    },
  };
}

export function setName(name) {
  return {
    type: USER_NAME_SET,
    fetch: {
      url: `/api/name/set`,
      body: {
        name,
      },
    },
  };
}

export function getArticles() {
  return {
    type: ARTICLES_GET,
    fetch: {
      url: `/api/articles/get`,
      body: {
      },
    }
  }
}

export function loadArticle(articleName) {
  return {
    type: LOAD_ARTICLE,
    fetch: {
      url: `/api/articleName/load`,
      body: {
        articleName,
      },
    }
  }
}
