import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MovieList from "..";
import { describe, vi, it, expect } from "vitest";

const mockList = [
  {
    episode_id: 1,
    title: "A New Hope",
    release_date: "1977-05-25",
    director: "loaream lipsm",
    producer: "loaream lipsm",
    opening_crawl: "loaram lipsm",
  },
  {
    episode_id: 2,
    title: "The Empire Strikes Back",
    release_date: "1980-05-21",
    director: "loaream lipsm",
    producer: "loaream lipsm",
    opening_crawl: "loaram lipsm",
  },
  {
    episode_id: 3,
    title: "Return of the Jedi",
    release_date: "1983-05-25",
    director: "loaream lipsm",
    producer: "loaream lipsm",
    opening_crawl: "loaram lipsm",
  },
];

describe("MovieList", () => {
  it("renders the movie list with the correct data", () => {
    render(<MovieList list={mockList} onHandleClick={() => {}} title="" />);
    const movieRows = screen.getAllByRole("row");
    expect(movieRows.length).toEqual(mockList.length + 1); // including the table header row
    mockList.forEach((movie) => {
      expect(screen.getByText(movie.episode_id.toString())).toBeTruthy();
      expect(screen.getByText(movie.title)).toBeTruthy();
      expect(screen.getByText(movie.release_date)).toBeTruthy();
    });
  });

  it("applies the active class to the row of the selected movie", () => {
    const handleClick = vi.fn();
    const selectedMovieTitle = mockList[1].title;
    render(
      <MovieList
        list={mockList}
        title={selectedMovieTitle}
        onHandleClick={handleClick}
      />
    );
    const selectedMovieRow = screen.getByText(selectedMovieTitle).closest("tr");
    
    expect(selectedMovieRow).toHaveClass("activeClass");
  });
});
