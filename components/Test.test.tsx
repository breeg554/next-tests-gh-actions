import { render, screen } from "@testing-library/react";
import Test from "./Test";
it("Test test", () => {
  render(<Test />);

  const el = screen.getByText(/Hello world!/);

  expect(el).toBeInTheDocument();
});
