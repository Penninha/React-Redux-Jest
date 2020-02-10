import React from "react";
import Typography from "@material-ui/core/Typography";
import CommentWrapper from "../index";
import { shallow } from "enzyme";

it("should render the comments", () => {
  const wrapped = shallow(
    <CommentWrapper comments={["Comment1", "Comment2"]} />
  );

  expect(wrapped.find(Typography).length).toEqual(2);
});
