// UserComponent.test.js

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios"; // Import axios for mocking
import ListingPage from "./pages/ListingPage";

// Mock Axios GET request
jest.mock("axios");

test("fetches and displays user data", async () => {
  // Mock Axios response
  axios.get.mockResolvedValue({
    data: [
      {
        alpha_two_code: "AE",
        name: "Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)",
        country: "United Arab Emirates",
        domains: ["mbzuai.ac.ae"],
        web_pages: ["https://mbzuai.ac.ae/"],
        "state-province": "Abu Dhabi",
      },
    ],
  });

  // Render the component
  render(<ListingPage />);

  // Wait for the API call to resolve
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

  // Assert that the user details are displayed
  expect(screen.getByText("User Details")).toBeInTheDocument();
});
