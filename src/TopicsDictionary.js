import React from "react";
import { useState, useEffect } from "react";
import {
  loadCategories,
  loadSubcategories,
  loadTopics
} from "./categoriesSlice.js";
import { useDispatch } from "react-redux";
import Categories from "./Categories.js";
import Subcategories from "./Subcategories.js";
import Topics from "./Topics.js";
import TopicDetails from "./TopicDetails.js";

const TopicsDictionary = () => {
  const dispatch = useDispatch();
  //const categories = use;
  useEffect(() => {
    fetch("https://chicagohealthatlas.org/api/v1/categories/", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        let subcategories = [];
        let categoriesObj = {};
        let subcategoriesObj = {};
        data.results.forEach((category) => {
          category.visible = true;
          category.selected = false;
          categoriesObj[category.name] = category;
          category.subcategories.forEach((subcategory) => {
            if (!subcategoriesObj.hasOwnProperty(subcategory.name)) {
              subcategoriesObj[subcategory.name] = subcategory.name;
              subcategory.visible = true;
              subcategory.selected = false;
              subcategories.push(subcategory);
            }
          });
        });

        let sortedSubcategories = subcategories.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          return -1;
        });
        sortedSubcategories.unshift({
          name: "All",
          visible: true,
          selected: true
        });
        dispatch(loadSubcategories(sortedSubcategories));

        let sortedCategories = data.results.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          return -1;
        });
        sortedCategories.unshift({
          name: "All",
          visible: true,
          selected: true
        });
        dispatch(
          loadCategories({ sorted: sortedCategories, obj: categoriesObj })
        );
      });
  });

  // fetch topics
  useEffect(() => {
    fetch("https://chicagohealthatlas.org/api/v1/topics/?limit=300", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        let topicsObj = {};
        data.results.forEach((topic) => {
          topic.visible = true;
          if (!topicsObj.hasOwnProperty(topic.name)) {
            topicsObj[topic.name] = topic;
          }
        });
        dispatch(
          loadTopics({ topicsArray: data.results, topicsObj: topicsObj })
        );
      });
  });

  return (
    <div id="table-container">
      <h1>Topics Dictionary</h1>
      <p>
        Visit
        <a
          href="https://chicagohealthatlas.org/api/v1/"
          title="Chicago Health Atlas API page"
          target="_blank"
          rel="noopener noreferrer"
        >
          chicagohealthatlas.org/api/v1/
        </a>
        to learn more about Chicago Health Atlas API
      </p>

      <Categories />
      <Subcategories />
      <Topics />
      <TopicDetails />
    </div>
  );
};
export default TopicsDictionary;
