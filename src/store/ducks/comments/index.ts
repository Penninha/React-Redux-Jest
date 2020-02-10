import { CommentState, CommentTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: CommentState = {
  data: []
};

const reducer: Reducer<CommentState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CommentTypes.SAVE_COMMENT:
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
};

export default reducer;
