import { saveComment } from "../actions";
import { CommentTypes } from "../types";

describe("saveComment", () => {
  it("has the correct type", () => {
    const action = saveComment({ comment: "" });
    expect(action.type).toEqual(CommentTypes.SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const action = saveComment({ comment: "New Commentary" });
    expect(action.payload).toEqual({ comment: "New Commentary" });
  });
});
