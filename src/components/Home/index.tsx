import React from "react";
import { Provider } from "react-redux";
import CommentBox from "components/CommentBox";
import CommentWrapper from "components/CommentWrapper";
import store from "store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CommentBox />
        <CommentWrapper />
      </div>
    </Provider>
  );
};

export default App;
