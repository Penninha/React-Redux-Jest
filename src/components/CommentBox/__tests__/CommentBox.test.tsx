import React from "react";
import { TextField, Button } from "@material-ui/core";
import { createMount } from "@material-ui/core/test-utils";

import CommentBox from "../index";
import store from "store";
import Root from "store/root";

let mount: any;

beforeEach(() => {
  mount = createMount();
});

afterEach(() => {
  mount.cleanUp();
});

it("renders the entire form", () => {
  const wrapped = mount(
    <Root store={store}>
      <CommentBox />
    </Root>
  );

  expect(wrapped.find(TextField).length).toEqual(1);
  expect(wrapped.find(Button).length).toEqual(1);
});

describe("the text area", () => {
  let wrapped: any;

  beforeEach(() => {
    wrapped = mount(
      <Root store={store}>
        <CommentBox />
      </Root>
    );

    wrapped
      .find(CommentBox)
      .find("textarea")
      .first()
      .simulate("change", {
        target: { value: "New Comment" }
      });

    wrapped.update();
  });

  it("should allow user to be able to type inside TextField", () => {
    expect(
      wrapped
        .find(CommentBox)
        .find("textarea")
        .first()
        .prop("value")
    ).toEqual("New Comment");
  });

  it("should empty the TextField when click at the Button", () => {
    expect(
      wrapped
        .find(CommentBox)
        .find("textarea")
        .first()
        .prop("value")
    ).toEqual("New Comment");

    wrapped.find(Button).simulate("click");
    wrapped.update();

    expect(
      wrapped
        .find(CommentBox)
        .find("textarea")
        .first()
        .prop("value")
    ).toEqual("");
  });
});
