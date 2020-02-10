import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { saveComment } from "store/ducks/comments/actions";
import { Commentary } from "store/ducks/comments/types";

interface OwnProps {
  saveComment(a: Commentary): void;
}

const CommentBox: React.FC<OwnProps> = ({ saveComment }) => {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleClick = () => {
    saveComment({ comment: value });
    setValue("");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Adicione um comentário</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="comment-box-field"
          label="Comentário"
          multiline
          rowsMax="4"
          value={value}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          id="comment-box-button"
          onClick={handleClick}
          variant="contained"
          size="large"
          color="primary"
        >
          Adicionar comentário
        </Button>
      </Grid>
    </Grid>
  );
};

export default connect(null, { saveComment })(CommentBox);
