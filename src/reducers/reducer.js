import { DEC_COUNT, INC_COUNT } from "./actionTypes";

const initialState = { count: 0 };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INC_COUNT:
      return { count: state.count + 1 };
    case DEC_COUNT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
