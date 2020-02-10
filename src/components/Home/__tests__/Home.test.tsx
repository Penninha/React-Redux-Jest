import React from "react";
import App from "../index";
import CommentBox from "components/CommentBox";
import CommentWrapper from "components/CommentWrapper";
import { shallow, ShallowWrapper } from "enzyme";

let wrapped: ShallowWrapper;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows the CommentBox", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows the CommentWrapper", () => {
  expect(wrapped.find(CommentWrapper).length).toEqual(1);
});
