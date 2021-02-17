import mockedAxios from "axios";
import {act, cleanup, render, screen, waitFor} from "@testing-library/react";
import Pokemon from "../components/PokemonCard";

afterEach(cleanup);
jest.mock("axios");

test("Test if Pokemon works with axios", async function() {

  var response = {
    data: {
      results: [
        {
          name: "pidgey",
        },
        {
          name: "caterpie"
        }

      ]
    }
  }

  mockedAxios.get.mockResolvedValue(response);
  act(function() {
    render(<Pokemon/>)
  })

  await waitFor(function() {
    var text = screen.getByText(/pidgey/i)
    expect(text).toBeInTheDocument()
  });
});