import {render, screen} from  "@testing-library/react";
import Navigator from "../pages/Navigator";

test("If navigator render with the test 'Home'", function() {
  render(<Navigator/>);
  var LinkText = screen.getByText(/home/i);
  expect(LinkText).toBeInTheDocument;
})