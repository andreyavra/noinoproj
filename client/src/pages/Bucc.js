import React from 'react';
import './cssFiles/Bucc.css';
import Header from '../components/Header';

class Bucc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bucctastic: false,
      name: '',
    };
  }

  render() {
    return (
      <div>
        <Header />

        <h1 className = "buccText">This is the bucccccctastic page</h1>
        <a href="https://www.cse.unsw.edu.au/~richardb/" target="_blank">

          <img src = "https://i.imgur.com/LtQMmKq.png" className="buccGod" alt = "Attractive Chad" />

        </a>
        
      </div>
    );
  }


}


export default Bucc;


