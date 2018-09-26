import React from 'react';
import Item from './Item';

function ItemList(props) {
	return (
    	<ol className="item-list">
          {props.items.map((item, index) => <Item index={index} item={item} />)}
        </ol>
    )
}

export default ItemList