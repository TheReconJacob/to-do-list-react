import React, { Component } from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "../App";

describe("Add Task Button", () => {
  it("Renders without crashing", () => {
    const AppPage = render(<App />);
    AppPage.getByText("Add");
  });
});
