import {
  ALL_RESTAURANT_REQUEST,
  ALL_RESTAURANT_SUCCESS,
  ALL_RESTAURANT_FAIL,
  SORT_BY_RATINGS,
  SORT_BY_REVIEWS,
  TOGGLE_VEG_ONLY,
  CLEAR_ERROR,
} from "../constants/restaurantConstant";

import axios from "axios";

export const getRestaurants = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: ALL_RESTAURANT_REQUEST });
      let link = `/api/v1/eats/stores`;
      const { data } = await axios.get(link);
      const { restaurants, count } = data;
      console.log(restaurants);
      dispatch({
        type: ALL_RESTAURANT_SUCCESS,
        payload: { restaurants, count },
      });
    } catch (err) {
      dispatch({
        type: ALL_RESTAURANT_FAIL,
        payload: err.response.data.message, 
      });
    }
  };
};

export const sortByRatings = () => {
  return {
    type: SORT_BY_RATINGS,
  };
};

export const sortByReviews = () => {
  return {
    type: SORT_BY_REVIEWS,
  };
};
export const toggleVegOnly = () => {
  return {
    type: TOGGLE_VEG_ONLY,
  };
};
export const clearErrors = () => {
  return {
    type: CLEAR_ERROR,
  };
};
