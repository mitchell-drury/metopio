import React from "react";
import CategoryTile from "./CategoryTile.js";
import { useSelector, useDispatch } from "react-redux";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categoriesArray);
  const categoriesHTML = categories.map((category) => {
    if (category.visible) {
      return (
        <CategoryTile
          key={category.name}
          name={category.name}
          selected={category.selected}
        />
      );
    }
  });

  return (
    <div id="categories">
      <h1>Categories</h1>
      {categoriesHTML}
    </div>
  );
};

export default Categories;
