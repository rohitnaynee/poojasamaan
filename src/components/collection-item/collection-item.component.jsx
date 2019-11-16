import React from 'react';


import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
<div className = 'colletion-item' >
  <div
    className = 'image'
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    > 

    
    <p>lor</p>


    
    </div>
    <div className = 'collection-footer' >
    <span className = 'name' > {name} </span>
    <span className = 'price' > {price} </span>
   </div>
</div>
);

export default CollectionItem;
