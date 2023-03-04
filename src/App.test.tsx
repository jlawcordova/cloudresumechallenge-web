import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders tagline", () => {
  render(<App />);
  const linkElement = screen.getByText(/full stack developer/i);
  expect(linkElement).toBeInTheDocument();
});
