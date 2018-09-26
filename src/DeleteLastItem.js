import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeleteLastItem extends Component {
  	static PropTypes = {
        OnDeleteLastItem: PropTypes.func.isRequired,
        ItemsLength: PropTypes.number.isRequired 
    }

	noItemsFound = () => {
      return this.props.ItemsLength === 0;
    };

  	render() {
    	return(
        	<button onClick={this.props.OnDeleteLastItem} disabled={this.noItemsFound()}>
              Delete Last Item
            </button>
        )
    }
}

export default DeleteLastItem