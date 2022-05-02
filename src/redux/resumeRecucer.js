const SET_SEARCH_RESUME = "SET_SEARCH_RESUME";
const ADD_RESUME_CARD = "ADD_RESUME_CARD";

const defaultState = {
  list: [],
  isFetching: true,
  addedResume: [],
};

export default function resumeReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_RESUME_CARD:
      return {
        ...state,
        addedResume: [...state.addedResume, action.payload],
      };
    case SET_SEARCH_RESUME:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
}

export const setSearchesResume = list => ({
  type: SET_SEARCH_RESUME,
  payload: list,
});

export const setAddResume = list => ({
  type: ADD_RESUME_CARD,
  payload: list,
});
