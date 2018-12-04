import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ItemList from '../components/ItemList';
import PropTypes from 'prop-types';

class TestingContainer extends Component {
  
  render() {
    const {itemList} = this.props;
    
    return (
      <ItemList items={itemList} />
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

TestingContainer.propTypes = {
  itemList: PropTypes.array
};

const ConnectedTestingContainer = connect(mapStateToProps, mapDispatchToProps)(TestingContainer);

export default ConnectedTestingContainer;