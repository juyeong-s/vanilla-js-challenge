import reducer from "@/store";
import { observable } from "./observable";

const createStore = (reducer) => {
  const state = observable(reducer());

  const dispatch = (action) => {
    const newState = reducer(state, action);

    for (const [key, value] of Object.entries(newState)) {
      if (!state[key]) continue;
      state[key] = value;
    }
  };

  const getState = () => state;

  return { dispatch, getState };
};

const store = createStore(reducer);
export default store;

export const dispatch = (action) => store.dispatch(action);
