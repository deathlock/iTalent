import React from 'react';
import CategoryCard from '../atoms/categoryCard/categoryCard';

const catArray = [
    {
        icon: "icon",
        name: "Developers",
        description: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies."
    },
    {
        icon: "icon",
        name: "Designers",
        description: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies."
    },
    {
        icon: "icon",
        name: "Finance Experts",
        description: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies."
    },
    {
        icon: "icon",
        name: "Project Managers",
        description: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies."
    },
    {
        icon: "icon",
        name: "Product Managers",
        description: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies."
    },
    {
        icon: "icon",
        name: "iTalent Projects",
        description: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies."
    },
]

function Categories() {
    return (
        <div>
            <h1>Explore by Categories</h1>
            <span>we are the largest, globally-distributed network of top business, design, and technology talent,
                ready to tackle your most important initiatives.
            </span>
            <div>
                {
                catArray.map((el, key) => {
                    return <CategoryCard data={el} key={key} />
                })
                }
            </div>
        </div>
    )
}

export default Categories;