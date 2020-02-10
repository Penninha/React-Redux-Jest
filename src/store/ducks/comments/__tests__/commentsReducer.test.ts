import reducer from "../index";
import { CommentTypes } from "../types";

it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: CommentTypes.SAVE_COMMENT,
    payload: "New Comment"
  };

  const newState = reducer({ data: [] }, action);

  expect(newState.data[0]).toEqual("New Comment");
});

it("handles unknown actions", () => {
  const action = { type: "DHSUAHDSUAI" };
  const newState = reducer({ data: [] }, action);
  expect(newState).toEqual({ data: [] });
});
