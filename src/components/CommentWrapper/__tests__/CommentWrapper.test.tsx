import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { Typography } from "@material-ui/core";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import CommentWrapper from "../index";
import Root from "store/root";
import { ApplicationState } from "store";

let wrapped: ReactWrapper;
const initialState: ApplicationState = {
  comments: { data: [{ comment: "Comment 1" }, { comment: "Comment 2" }] }
};
let store: MockStoreEnhanced<ApplicationState | unknown>;
const mockStore = configureStore();

beforeEach(() => {
  store = mockStore(initialState);

  wrapped = mount(
    <Root store={store}>
      <CommentWrapper />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("creates one Typography per comment", () => {
  expect(wrapped.find(Typography).length).toEqual(2);
});

it("assign the right text to each comment", () => {
  wrapped
    .find(Typography)
    .forEach((item, id) =>
      expect(item.props().children).toEqual(`Comment ${id + 1}`)
    );
});
