import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NoDataBox from "..";

describe("snapShot", () => {
  it("component snapshot", () => {
    const { container } = render(
      <NoDataBox image="/example/noData.png" text="no image" />
    );
    expect(container).toMatchSnapshot();
  });
  it("should render an image and text", () => {
    const props = { image: "test-image.jpg", text: "No Data Found" };
    render(<NoDataBox {...props} />);
    const image = screen.getByRole("img");
    const text = screen.getByText(props.text);
    expect(image).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
