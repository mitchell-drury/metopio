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
import { dummyTopics, dummyCategories } from "./dummyData.js";


const TopicsDictionary = () => {
  const dispatch = useDispatch();

  function sortCategories(data) {
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
    })

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
  }

  function sortTopics(data) {
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
  }

  useEffect(() => {
    fetch("https://chicagohealthatlas.org/api/v1/categories/", {
      method: "GET"
    })
      .then((res) => {
        if(!res.ok) {
          throw new Error('net work reject');
        }
        res.json();
      })
      .then((data) => {
        sortCategories(data);
      })  
      .catch(function(error) {
        console.log('Categories API fetch problem. Use dummy data instead. Error: ', error)
        sortCategories(dummyCategories);
      });
  });

  // fetch topics
  useEffect(() => {
    fetch("https://chicagohealthatlas.org/api/v1/topics/?limit=300", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        sortTopics(data);
      })
      .catch(error => {
        console.log('Topics API fetch problem. Error: ', error);
        sortTopics(dummyTopics);
      })
  });

  return (
    <div id="table-container">
      <h1>Topics Dictionary</h1>
      <p>This was an interview problem where I was tasked with creating a visual way of exploring of Data Categories and Topics. It was pretty open ended, so this is what I envisioned. In the environment that they asked me to develop it, I was able to access their API via Fetch, but not from this heroku hosting. As such I copied over some sample data to use in case that the fetch fails. </p>
      <p>
        This is the API: 
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
