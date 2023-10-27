import React from "react";

function CategoryFilter({category}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <div>
        {category.map((item) => (<button key = {item}>{item}</button>
      ))}
      </div>
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
