import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showSubcategories, showTopicsFromSub } from "./categoriesSlice.js";

const SubcategoryTile = (props) => {
  const dispatch = useDispatch();
  const subcategories = useSelector((state) => state.categories.subcategories);
  const topicsArray = useSelector((state) => state.categories.topicsArray);
  const currentCategory = useSelector(
    (state) => state.categories.currentCategory
  );

  function showTopics(e) {
    let subcategory = props.name;
    let visibleSubcategories = subcategories.map((subcategoryTile) => {
      if (subcategoryTile.name === subcategory) {
        return { ...subcategoryTile, selected: true };
      } else {
        return { ...subcategoryTile, selected: false };
      }
    });
    dispatch(showSubcategories(visibleSubcategories));

    let visibleTopics = topicsArray.map((topic) => {
      for (let i = 0; i < topic.subcategories.length; i++) {
        if (
          topic.subcategories[i].name === subcategory ||
          (subcategory === "All" &&
            topic.subcategories[i].category === currentCategory)
        ) {
          return { ...topic, visible: true };
        }
      }
      return { ...topic, visible: false };
    });
    dispatch(showTopicsFromSub(visibleTopics));
  }

  let classes = "subcategoryTile";
  if (props.selected) {
    classes += " subcategoryTileSelected";
  }
  return (
    <div className={classes} name={props.name} onClick={showTopics}>
      {props.name}
    </div>
  );
};

export default SubcategoryTile;
