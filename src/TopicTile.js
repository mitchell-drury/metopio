import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentTopic,
  setTopicDetailVisibility
} from "./categoriesSlice.js";

const TopicTile = (props) => {
  const dispatch = useDispatch();
  const topicsObj = useSelector((state) => state.categories.topicsObj);

  function topicClick(e) {
    dispatch(setCurrentTopic(topicsObj[e.target.getAttribute("name")]));
    dispatch(setTopicDetailVisibility({ visible: true }));
  }

  return (
    <div className="topicTile" name={props.name} onClick={topicClick}>
      {props.name}
    </div>
  );
};

export default TopicTile;
