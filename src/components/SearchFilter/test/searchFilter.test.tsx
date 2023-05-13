import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom/extend-expect";
import SearchFilter from "..";

describe("SearchFilter component", () => {
  it("renders with correct placeholder text", () => {
    render(<SearchFilter inputValue="" onChange={() => {}} />);
    const input = screen.getByPlaceholderText("Type to Filter");
    expect(input).toBeInTheDocument();
  });

 
  it("displays the given input value", () => {
    render(<SearchFilter inputValue="hello" onChange={() => {}} />);
    const input = screen.getByPlaceholderText("Type to Filter");
    expect(input).toHaveValue("hello");
  });
});
