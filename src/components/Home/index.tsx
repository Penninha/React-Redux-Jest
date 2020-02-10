import React from "react";
import Root from "store/root";
import CommentBox from "components/CommentBox";
import CommentWrapper from "components/CommentWrapper";
import store from "store";

const App: React.FC = () => {
  return (
    <Root store={store}>
      <div className="App">
        <CommentBox />
        <CommentWrapper />
      </div>
    </Root>
  );
};

export default App;
