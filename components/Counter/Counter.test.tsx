import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";
describe("Counter", () => {
  describe("Initialize with defaultCount = 0 and desccription = 'Counter'", () => {
    beforeEach(() => {
      render(<Counter defaultCount={0} description="Counter" />);
    });
    it("defaultCount = 0", () => {
      expect(screen.getByText("Current count: 0")).toBeInTheDocument();
    });
    it("render description as 'Counter'", () => {
      expect(screen.getByText(/Counter/i)).toBeInTheDocument();
    });

    describe("When + is clicked", () => {
      beforeEach(() => {
        user.click(screen.getByRole("button", { name: "Increment" }));
      });
      it("renders currentCount = 1", () => {
        expect(screen.getByText("Current count: 1")).toBeInTheDocument();
      });
    });

    describe("When - is clicked", () => {
      beforeEach(() => {
        user.click(screen.getByRole("button", { name: "Decrement" }));
      });
      it("renders currentCount = -1", () => {
        expect(screen.getByText("Current count: -1")).toBeInTheDocument();
      });
    });
  });
  describe("Initialize with defaultCount = 10 and desccription = 'WWW'", () => {
    beforeEach(() => {
      render(<Counter defaultCount={10} description="WWW" />);
    });
    it("defaultCount = 10", () => {
      expect(screen.getByText("Current count: 10")).toBeInTheDocument();
    });
    it("render description as 'WWW'", () => {
      expect(screen.getByText(/WWW/)).toBeInTheDocument();
    });
    describe("When the incrementer changed to 5 and + button is clicked", () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}5");
        user.click(screen.getByRole("button", { name: "Increment" }));
      });
      it("render Current Count  = 15", () => {
        expect(screen.getByText("Current count: 15")).toBeInTheDocument();
      });
    });
    describe("When the incrementer changed to 25 and - button is clicked", () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}25");
        user.click(screen.getByRole("button", { name: "Decrement" }));
      });
      it("render Current Count  = -15", () => {
        expect(screen.getByText("Current count: -15")).toBeInTheDocument();
      });
    });
  });
});
