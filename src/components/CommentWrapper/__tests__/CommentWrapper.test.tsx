import React from "react";
import Typography from "@material-ui/core/Typography";
import CommentWrapper from "../index";
import { shallow } from "enzyme";

it("should render the comments", () => {
  const wrapped = shallow(<CommentWrapper />);

  expect(wrapped.find(Typography).length).toEqual(2);
});
