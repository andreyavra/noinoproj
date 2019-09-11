import React from 'react';


// Adds class About to the class that is React.Component, an existing library
class SubHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    // this.increaseNumber = this.increaseNumber.bind(this);
  }


  render() {
    console.log('Subheader rendered!');
    return (
      <div>
        <div className="subhead_expandme">Oh my god it expands</div>
      </div>
    );
  }
}

export default SubHeader;