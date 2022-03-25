import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTopicDetailVisibility } from "./categoriesSlice.js";

const TopicDetails = (props) => {
  const dispatch = useDispatch();
  const TopicData = useSelector((state) => state.categories.currentTopic);
  const ShowCurrentTopic = useSelector(
    (state) => state.categories.topicDetailVisible
  );

  let classes = "topicDetails";
  if (!ShowCurrentTopic) {
    classes += " hide";
  }

  function closeTopicDetail() {
    dispatch(setTopicDetailVisibility({ visible: false }));
  }

  return (
    <div className={classes} name="topicDetails">
      <div className="topicDetailShadow"></div>
      <div className="topicDetailFrame">
        <div className="close" onClick={closeTopicDetail}>
          X
        </div>
        <div>
          <span className="name label"> Name: </span>
          <span className="info"> {TopicData.name} </span>
        </div>
        <div>
          <span className="key label"> Key: </span>
          <span className="info"> {TopicData.key} </span>
        </div>
        <div>
          <span className="description label"> Description: </span>
          <span className="info"> {TopicData.description} </span>
        </div>
        <div>
          <span className="units label"> Units: </span>
          <span className="info"> {TopicData.units} </span>
        </div>
      </div>
    </div>
  );
};

export default TopicDetails;
