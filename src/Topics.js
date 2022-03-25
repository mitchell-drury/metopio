import React from "react";
import TopicTile from "./TopicTile.js";
import { useSelector, useDispatch } from "react-redux";

const Topics = () => {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.categories.topicsArray);
  const topicsHTML = topics.map((topic) => {
    if (topic.visible) {
      return <TopicTile key={topic.name} name={topic.name} />;
    }
  });
  return (
    <div id="topics">
      <h1>Topics</h1>
      {topicsHTML}
    </div>
  );
};

export default Topics;
