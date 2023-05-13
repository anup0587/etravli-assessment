import { render } from "@testing-library/react";
import SortByOrder from "..";

describe("SortByOrder", () => {
  const props = {
    optionList: [
      { label: "Label 1", value: "value1" },
      { label: "Label 2", value: "value2" },
    ],

    selectedValue: "value1",
  };
  it(" snapshot", () => {
    const { container } = render(
      <SortByOrder {...props} onClickItem={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });
});
