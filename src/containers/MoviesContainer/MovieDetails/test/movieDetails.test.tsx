import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MovieDetails from "..";

const mockDetails = {
  Title: "The Shawshank Redemption",
  Poster: "https://www.example.com/shawshank-redemption.jpg",
  Director: "Frank Darabont",
  Plot: "loream lepsm",
  Description:
    "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  Ratings: [
    { Source: "Internet Movie Database", Value: "8.0/10" },
    { Source: "Rotten Tomatoes", Value: "8.5/10" },
    { Source: "Metacritic", Value: "9.0/10" },
  ],
};
const mockSampleDetails = {
  Title: "",
  Poster: "",
  Director: "",
  Description: "",
  Plot: "",
  Ratings: [

  ],
};
describe("MovieDetails", () => {
  it("renders no movie box when details are not provided", () => {
    render(<MovieDetails details={mockSampleDetails} />);
    const noMovieBox = screen.getByText("Please select the movie from list");
    expect(noMovieBox).toBeInTheDocument();
  });

  it("renders movie details correctly", () => {
    render(<MovieDetails details={mockDetails} />);
    const movieTitle = screen.getByText("The Shawshank Redemption");
    const movieImage = screen.getByAltText("movie Image");
    const movieDirector = screen.getByText("Directed by: Frank Darabont");
    const movieDescription = screen.getByText(
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    );
    const averageRating = screen.getByText("Average Rating:");
    const ratingChips = screen.getAllByTestId("chip");
    expect(movieTitle).toBeInTheDocument();
    expect(movieImage).toHaveAttribute(
      "src",
      "https://www.example.com/shawshank-redemption.jpg"
    );
    expect(movieDirector).toBeInTheDocument();
    expect(movieDescription).toBeInTheDocument();
    expect(averageRating).toBeInTheDocument();
    expect(ratingChips).toHaveLength(3);
  });


});
