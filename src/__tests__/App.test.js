import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App tests", () => {
  test('Renders "languages" title', () => {
    render(<App />);
    const title = screen.getByText(/languages/i);
    expect(title).toBeInTheDocument();
  });

  test("Languages list component renders correctly", () => {
    render(<App />);
    const pythonCard = screen.getByText(/python/i);
    expect(pythonCard).toBeInTheDocument();
  });

  test("renders the correct number of languages", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(8);
  });
});
