import { fireEvent, render, screen } from '@testing-library/react';
import Card from "../components/Card";

describe("Card component", () => {
  test("renders correctly", () => {
    render(<Card />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(1);
  });

  test("click handler is called", () => {
    render(<Card />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    fireEvent.click(button);
    const votes = screen.queryByText(2);
    expect(votes).toBeInTheDocument();
  })
})