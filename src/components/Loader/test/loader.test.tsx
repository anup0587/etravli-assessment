import { render,screen } from "@testing-library/react"
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/extend-expect";
import Loader from ".."

describe('Loader', () => {
    it(" snapshot", () => {
        const { container } = render(
            <Loader loading={true} />
        );
        expect(container).toMatchSnapshot();
      });
    it('should render loader when loading prop is true', () => {
      render(<Loader loading={true} />)
  
      const loader = screen.getByTestId('loader')
      expect(loader).toBeInTheDocument()
    })
  
    it("should not render loader when loading prop is false", () => {
        const { container } = render(<Loader loading={false} />);
        const loader = screen.queryByTestId("loader");
        expect(loader).toBeNull();
      });
  })