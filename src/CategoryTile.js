import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  showSubcategories,
  showTopics,
  selectCategory,
  setCurrentCategory
} from "./categoriesSlice";

const CategoryTile = (props) => {
  const dispatch = useDispatch();
  const categoriesObj = useSelector((state) => state.categories.categoriesObj);
  const categoriesArray = useSelector(
    (state) => state.categories.categoriesArray
  );
  const subcategories = useSelector((state) => state.categories.subcategories);
  const topicsArray = useSelector((state) => state.categories.topicsArray);
  const toShow = [];

  function showSubcatgories(e) {
    let category = props.name;
    dispatch(setCurrentCategory(category));

    if (categoriesObj[category]) {
      categoriesObj[category].subcategories.forEach((subcategory) => {
        toShow.push(subcategory.name);
      });
    }

    let visibleSubcategories = subcategories.map((subcategory) => {
      if (subcategory.name === "All") {
        return { ...subcategory, visible: true, selected: true };
      } else if (toShow.indexOf(subcategory.name) > -1 || category === "All") {
        return { ...subcategory, visible: true, selected: false };
      } else {
        return { ...subcategory, visible: false, selected: false };
      }
    });
    dispatch(showSubcategories(visibleSubcategories));

    //plural in case future update to allow multiple selected
    let selectedCategories = categoriesArray.map((categoryTile) => {
      if (categoryTile.name === category) {
        return { ...categoryTile, selected: true };
      } else {
        return { ...categoryTile, selected: false };
      }
    });
    dispatch(selectCategory(selectedCategories));

    let visibleTopics = topicsArray.map((topic) => {
      for (let i = 0; i < topic.subcategories.length; i++) {
        if (
          topic.subcategories[i].category === category ||
          category === "All"
        ) {
          return { ...topic, visible: true };
        }
      }
      return { ...topic, visible: false };
    });
    dispatch(showTopics(visibleTopics));
  }

  let classes = "categoryTile";
  if (props.selected) {
    classes += " categoryTileSelected";
  }

  return (
    <div className={classes} name={props.name} onClick={showSubcatgories}>
      {props.name}
    </div>
  );
};

export default CategoryTile;
