import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

interface OwnProps {
  comments: string[];
}

const CommentTitle: React.FC<OwnProps> = ({ comments }) => {
  return (
    <Grid container style={{ marginTop: 20 }}>
      {comments.map((item, id) => (
        <Grid item xs={12} key={id}>
          <Typography>{item}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default CommentTitle;
