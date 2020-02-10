import React from "react";
import CommentBox from "components/CommentBox";
import CommentWrapper from "components/CommentWrapper";

const App: React.FC = () => {
  const [comments, updateComments] = React.useState<string[]>([""]);

  const addComment = (e: string) => updateComments(val => [...val, e]);

  return (
    <div className="App">
      <CommentBox handleAddComment={addComment} />
      <CommentWrapper comments={comments} />
    </div>
  );
};

export default App;
