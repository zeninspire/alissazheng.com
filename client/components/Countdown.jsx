import React, { Component } from 'react';
import Countdown from 'react-count-down';

class Count extends Component {
  render () {
    let OPTIONS = { endDate: '02/07/2017 11:58 PM', prefix: 'til launch!' }
 
    return (
      <div>
        <Countdown options={OPTIONS} />
      </div>
    )
  }
}

export default Count