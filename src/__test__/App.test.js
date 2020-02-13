import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Add Task Button", () => {
  it("Creates a task when clicking the Add Button", () => {
    const AppPage = render(<App />);
    expect(AppPage.queryByText("Task 1")).toBe(null);
    fireEvent.change(AppPage.getByPlaceholderText("Name your Task here..."), {
      target: { value: "Task 1" }
    });
    fireEvent.click(AppPage.getByText("Add"));
    expect(AppPage.queryByText("Task 1")).not.toBe(null);
  });
});
