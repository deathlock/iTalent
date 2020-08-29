import React from 'react';

function CategoryCard(props) {
    return (
        <div>
            <span>{props.data.icon}</span>
            <h2><b>{props.data.name}</b></h2>
            <p>{props.data.description}</p>
        </div>
    )
}

export default CategoryCard;