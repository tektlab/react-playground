import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Tabs from "./Tabs";

describe("Tabs Component", () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("tabs component", () => {
  
})
