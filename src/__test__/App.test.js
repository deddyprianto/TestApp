import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "./test-utils";
import App from "../App";

test("harus bisa ini uda tengah malam anjing", () => {
  render(<App />);
  const buttonId = screen.getByRole("button", { name: "button cek" });
  fireEvent.click(buttonId);
  expect(buttonId).not.toBeFalsy();
});
