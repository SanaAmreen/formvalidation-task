import { ADD_CONTACT_DETAILS, ADD_PERSONAL_DETAILS, ADD_PREVIOUS_ADRESS } from "./types";

export const addDetails = (value) => ({
    type: ADD_PERSONAL_DETAILS,
   value:value
  });

  export const addContactDetails = (value)=>({
    type: ADD_CONTACT_DETAILS,
    value:value
  });

  export const addPreviousAddress = (value)=>({
    type: ADD_PREVIOUS_ADRESS,
    value:value
  })