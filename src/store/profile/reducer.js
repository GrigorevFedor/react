import { TOGGLE_ADD_INFO } from "./actions";

const initialState = {
  showAddInfo: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_INFO: {
      return {
        ...state,
        showAddInfo: !state.showAddInfo,
      };
    }
    

    default:
      return state;
  }
};