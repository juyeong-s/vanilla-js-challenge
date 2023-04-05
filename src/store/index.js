import { ACTION } from "@/constants/action";

const initialState = {
  interests: [],
  bookmarks: [],
  news: {},
};

const reducer = (state = initialState, action) => {
  if (!action) return state;

  switch (action.type) {
    case ACTION.SELECT_INTEREST:
      return { ...state, interests: action.interests };
    case ACTION.SELECT_BOOKMARK:
      return { ...state, bookmarks: action.bookmarks };
    case ACTION.NEWS:
      return { ...state, news: action.news };
    default:
      return state;
  }
};

export default reducer;
