import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/App.scss';

class ItemList extends Component {
  
  render() {
    const {items} = this.props;
      
    return (
      <div>
        <ul>
          { items.length ? 
            items.map((item, index) => { return <li key={index}>{item}</li>;}) : 
            <li>No items</li>
          }
        </ul>
      </div>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.array
};

export default ItemList;