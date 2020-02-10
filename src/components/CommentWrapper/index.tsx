import React from "react";
import { connect } from "react-redux";
import { ApplicationState } from "store";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Commentary } from "store/ducks/comments/types";

interface OwnProps {
  comments: Commentary[];
}

const CommentWrapper: React.FC<OwnProps> = ({ comments }) => {
  return (
    <Grid container style={{ marginTop: 20 }}>
      {comments.map((item, id) => (
        <Grid item xs={12} key={id}>
          <Typography>{item.comment}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = ({ comments }: ApplicationState) => ({
  comments: comments.data
});

export default connect(mapStateToProps)(CommentWrapper);
