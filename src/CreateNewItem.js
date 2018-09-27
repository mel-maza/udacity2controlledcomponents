import React, { Component } from 'react'

class CreateNewItem extends Component {
  	state = {
    	itemValue: ''
    }

	handleChange = event => {
    this.setState({ itemValue: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.props.onAddItem(this.state.itemValue);
  };

  inputIsEmpty = () => {
    return this.state.itemValue === '';
  };
	render() {
    	return (
        	<form onSubmit={this.addItem}>
              <input
              type="text"
              placeholder="Enter New Item"
              value={this.state.itemValue}
              onChange={this.handleChange}
              />
              <button disabled={this.inputIsEmpty()}>Add</button>
              </form>
        )
    }
}

export default CreateNewItem