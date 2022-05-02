const SET_SEARCH_VACANCY = "SET_SEARCH_VACANCY";
const ADD_VACANCY_CARD = "ADD_VACANCY_CARD";

const defaultState = {
  list: [],
  isFetching: true,
  addedVacansies: [],
};

export default function vacancyReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_VACANCY_CARD:
      return {
        ...state,
        addedVacansies: [...state.addedVacansies, action.payload],
      };
    case SET_SEARCH_VACANCY:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
}

export const setSearchesVacancy = list => ({
  type: SET_SEARCH_VACANCY,
  payload: list,
});

export const setAddVacancy = list => ({
  type: ADD_VACANCY_CARD,
  payload: list,
});
