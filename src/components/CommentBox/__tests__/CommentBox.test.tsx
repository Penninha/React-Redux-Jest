import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { TextField, Button } from "@material-ui/core";
import CommentBox from "../index";

let wrapped: ShallowWrapper;

beforeEach(() => {
  wrapped = shallow(<CommentBox />);
});

it("renders the entire form", () => {
  expect(wrapped.find(TextField).length).toEqual(1);
  expect(wrapped.find(Button).length).toEqual(1);
});

describe("the text area", () => {
  beforeEach(() => {
    wrapped.find(TextField).simulate("change", {
      target: { value: "New Comment" }
    });
    wrapped.update();
  });

  it("should allow user to be able to type inside TextField", () => {
    expect(wrapped.find(TextField).prop("value")).toEqual("New Comment");
  });

  it("should empty the TextField when click at the Button", () => {
    expect(wrapped.find(TextField).prop("value")).toEqual("New Comment");

    wrapped.find(Button).simulate("click");
    wrapped.update();

    expect(wrapped.find(TextField).prop("value")).toEqual("");
  });
});
