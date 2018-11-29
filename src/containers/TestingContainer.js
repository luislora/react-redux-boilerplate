import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../styles/App.scss';

class TestingContainer extends Component {
  
  render() {
    const {itemList} = this.props;
    
    return (
      <div>
        <ul>
          { itemList.length ? 
            itemList.map((item, index) => { return <li key={index}>{item}</li>;}) : 
            <li>No items</li>
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    itemList: state.ItemListReducer.itemList
  };
}
  
function mapDispatchToProps(dispatch) {
  return {
    fetchItems: () => {dispatch(actions.fetchItemList());}
  };
      
}

const ConnectedTestingContainer = connect(mapStateToProps, mapDispatchToProps)(TestingContainer);

export default ConnectedTestingContainer;