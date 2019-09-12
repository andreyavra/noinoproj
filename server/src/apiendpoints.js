const fs = require('fs');
const path = require('path');
  
const { StandardResponseError } = require('./general/error');

const filePath = path.resolve(__dirname, '../global_state.json');

let global_state = {};
try {
  const fileString = fs.readFileSync(filePath, 'utf8');
  global_state = JSON.parse(fileString);
} catch (err) {
  console.log("ERROR");
  global_state = {
    "suburbs":["kensington","randwick","kingsford"],
    "students":[
        {"name":"Andrey","age":16},
        {"name":"Pasta","age":15}
    ],
    "name":"poo",
    "articles":[
        {
            "name":"Apple Bad",
            "fileName":"AppleBad",
            "img":"https://i.imgur.com/Cgmsteh.jpg"
        },
        {
            "name":"Why you shouldn't choose IPT",
            "fileName":"IptBad",
            "img":"https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1.jpg"
        },
        {
            "name":"Why is Food Tech not an elective at SBHS?",
            "fileName":"SbhsBad",
            "img":"https://storage.googleapis.com/spec-host/mio-staging%2Fmio-material%2F1563837804615%2Fassets%2F112K6Wq8Cs9euF3NkSzRjY2cQ_y11gyRQ%2Fmd-guidelines-2x1-small.png"
        }
    ]
  }
}

const middlewareExample = async (req, res, params) => {
  console.log('Middleware');
};

const nameSet = async (req, res, params) => {
  //console.log('Terminal set', params.all());
  const json = JSON.stringify(global_state);

  global_state.name = params.get('name');
  fs.writeFileSync(filePath, json, 'utf8');

  return {
    name: global_state.name,
  }
};

const nameGet = async (req, res, params) => {
  //console.log('Terminal get', params.all());
  return {
    name: global_state.name,
  }
};


const articlesGet = async (req, res, params) => {
  return {
    articles: global_state.articles,
  }
};


const loadArticle = async (req, res, params) => {
  console.log("loggin params in apiendpoints.js:", params);
  console.log("loggin params._params in apiendpoints.js:", params._params.articleName.name);
  const articleName = params._params.articleName.name;
  console.log("loggin articleName in apiendpoints.js:", articleName);
  for (let i = 0; i < global_state.articles.length; i++) {
    // console.log("LOGGING ARTICLES[i], ARTICLE.ARTICLECONTENT:", global_state.articles[i], global_state.articles[i].articleContent);
    if (global_state.articles[i].fileName === articleName) {
      console.log("LOGGING ARTICLES[i], ARTICLE.ARTICLECONTENT IN IF STATEMENT:", global_state.articles[i], global_state.articles[i].articleContent);
      console.log("NOW RETURNING>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
      return global_state.articles[i];
    }
    
  }
};




module.exports = {
  /*
   * Simple echo endpoint that will return what you passed in.
   * Used to test if system is functioning correctly
   */
  'name/set': { // http://localhost:8081/api/name/set
    type: 'GET',
    middleware: [ middlewareExample ],
    terminal: nameSet,
  },

  'name/get': {
    type: 'GET',
    middleware: [ middlewareExample ],
    terminal: nameGet,
  },

  'articles/get': {
    type: 'GET',
    middleware: [ middlewareExample ],
    terminal: articlesGet,
  },

  'articleName/load': {
    type: 'GET',
    middleware: [ middlewareExample ],
    terminal: loadArticle,
  }
};
