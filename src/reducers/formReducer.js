import {
  ADD_FORM_DATA,
  DELETE_FORM_DATA,
  UPDATE_FORM_DATA,
} from "../actions/actionTypes";

const initialState = {
  formData: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM_DATA:
      return {
        ...state,
        formData: [...state.formData, action.payload],
      };
    case DELETE_FORM_DATA:
      return {
        ...state,
        formData: state.formData.filter((_, index) => index !== action.payload),
      };
    case UPDATE_FORM_DATA:
      return {
        ...state,
        formData: state.formData.map((data, index) =>
          index === action.payload.index ? action.payload.updatedData : data
        ),
      };
    default:
      return state;
  }
};

export default formReducer;
