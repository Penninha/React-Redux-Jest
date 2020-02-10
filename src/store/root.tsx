import React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";

interface OwnProps {
  store: Store;
}

const Root: React.FC<OwnProps> = ({ store, children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
