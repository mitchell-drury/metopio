import React from "react";
import SubcategoryTile from "./SubcategoryTile.js";
import { useSelector } from "react-redux";

const Subcategories = () => {
  const subcategories = useSelector((state) => state.categories.subcategories);
  const subcategoriesHTML = subcategories.map((subcategory) => {
    if (subcategory.visible) {
      return (
        <SubcategoryTile
          key={subcategory.name}
          name={subcategory.name}
          selected={subcategory.selected}
        />
      );
    }
  });

  return (
    <div id="subcategories">
      <h1>Subcategories</h1>
      {subcategoriesHTML}
    </div>
  );
};

export default Subcategories;
