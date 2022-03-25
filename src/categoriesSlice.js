import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoriesArray: [],
    categoriesObj: {},
    subcategories: [],
    topicsArray: [],
    topicsObj: {},
    currentTopic: {},
    currentCategory: "",
    topicDetailVisible: false
  },
  reducers: {
    loadCategories: (state, action) => {
      console.log("load categories payload: ", action.payload);
      state.categoriesArray = action.payload.sorted;
      state.categoriesObj = action.payload.obj;
    },
    loadSubcategories: (state, action) => {
      console.log("load subcategories payload: ", action.payload);
      state.subcategories = action.payload;
    },
    loadTopics: (state, action) => {
      console.log("load topics payload: ", action.payload);
      state.topicsArray = action.payload.topicsArray;
      state.topicsObj = action.payload.topicsObj;
    },
    showSubcategories: (state, action) => {
      console.log("show subcats payload: ", action.payload);
      state.subcategories = action.payload;
    },
    showTopics: (state, action) => {
      console.log("show topics payload: ", action.payload);
      state.topicsArray = action.payload;
    },
    selectCategory: (state, action) => {
      console.log("select category payload: ", action.payload);
      state.categoriesArray = action.payload;
    },
    showTopicsFromSub: (state, action) => {
      console.log("show topics sub payload: ", action.payload);
      state.topicsArray = action.payload;
    },
    setTopicDetailVisibility: (state, action) => {
      console.log("topic detail payload: ", action.payload);
      state.topicDetailVisible = action.payload.visible;
    },
    setCurrentTopic: (state, action) => {
      console.log("current topic payload: ", action.payload);
      state.currentTopic = action.payload;
    },
    setCurrentCategory: (state, action) => {
      console.log("curent cat payload: ", action.payload);
      state.currentCategory = action.payload;
    }
  }
});

export const {
  loadCategories,
  loadSubcategories,
  loadTopics,
  showSubcategories,
  showTopics,
  selectCategory,
  selectSubcategory,
  showTopicsFromSub,
  setTopicDetailVisibility,
  setCurrentTopic,
  setCurrentCategory
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
