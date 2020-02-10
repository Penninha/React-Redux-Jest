import { action } from "typesafe-actions";
import { CommentTypes, Commentary } from "./types";

export const saveComment = (data: Commentary) =>
  action(CommentTypes.SAVE_COMMENT, data);
