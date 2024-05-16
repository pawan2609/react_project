import {
  ADD_FORM_DATA,
  DELETE_FORM_DATA,
  UPDATE_FORM_DATA,
} from "./actionTypes";

export const addFormData = (formData) => ({
  type: ADD_FORM_DATA,
  payload: formData,
});

export const deleteFormData = (index) => ({
  type: DELETE_FORM_DATA,
  payload: index,
});

export const updateFormData = (index, updatedData) => ({
  type: UPDATE_FORM_DATA,
  payload: { index, updatedData },
});
