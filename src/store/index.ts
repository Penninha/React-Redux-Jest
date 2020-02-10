import { createStore, Store } from "redux";
import { CommentState } from "./ducks/comments/types";

import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
  comments: CommentState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
