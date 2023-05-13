import { describe, expect, it } from "vitest";
import {
  calculateAverageRating,
  convertToPercentage,
  getFilteredMovie,
} from ".";

describe("convertToPercentage", () => {
  it('converts "8/10" to "80%"', () => {
    expect(convertToPercentage("8/10")).toBe("80%");
  });

  it('converts "7.5/10" to "75%"', () => {
    expect(convertToPercentage("7.5/10")).toBe("75%");
  });

  it('returns "%" when given a percentage string', () => {
    expect(convertToPercentage("75%")).toBe("75%");
  });

  it("returns undefined when given an invalid input", () => {
    expect(convertToPercentage("foobar")).toBeUndefined();
  });
});

describe("calculateAverageRating()", () => {
  it("returns 0 for an empty array of ratings", () => {
    const ratings: never[] = [];
    expect(calculateAverageRating(ratings)).toBe(0);
  });

  it("returns the average rating for multiple ratings in X/Y format", () => {
    const ratings = [
      { Value: "8.3/10" },
      { Value: "7.9/10" },
      { Value: "9.1/10" },
    ];
    expect(calculateAverageRating(ratings)).toBe(8.4);
  });

  it("returns the average rating for multiple ratings in % format", () => {
    const ratings = [{ Value: "83%" }, { Value: "79%" }, { Value: "91%" }];
    expect(calculateAverageRating(ratings)).toBe(8.4);
  });

  it("returns the average rating for a mix of ratings in X/Y and % formats", () => {
    const ratings = [
      { Value: "8.3/10" },
      { Value: "83%" },
      { Value: "9.1/10" },
    ];
    expect(calculateAverageRating(ratings)).toBe(8.6);
  });

  it("returns the average rating for a single rating in X/Y format", () => {
    const ratings = [{ Value: "8.3/10" }];
    expect(calculateAverageRating(ratings)).toBe(8.3);
  });

  it("returns the average rating for a single rating in % format", () => {
    const ratings = [{ Value: "83%" }];
    expect(calculateAverageRating(ratings)).toBe(8.3);
  });
});

describe("getFilteredMovie()", () => {
  // Test Case 1: Test with an empty movies list
  const moviesList = [
    {
      title: "Star Wars: Episode IV - A New Hope",
      episode_id: 4,
      release_date: "1977-05-25",
      opening_crawl: "loream lipsm",
      director: "loream lipsm",
      producer: "loream lipsm",
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      episode_id: 5,
      release_date: "1980-05-21",
      opening_crawl: "loream lipsm",
      director: "loream lipsm",
      producer: "loream lipsm",
    },
    {
      title: "Star Wars: Episode VI - Return of the Jedi",
      episode_id: 6,
      release_date: "1983-05-25",
      opening_crawl: "loream lipsm",
      director: "loream lipsm",
      producer: "loream lipsm",
    },
  ];
  it("Empty movies list", () => {
    const result = getFilteredMovie([], "", "episode_id");
    expect(result).toEqual([]);
  });

  test("No match found", () => {
    const result = getFilteredMovie(moviesList, "foo", "episode_id");
    expect(result).toEqual([]);
  });

  it("One match found", () => {
    const result = getFilteredMovie(moviesList, "New Hope", "episode_id");
    expect(result).toEqual([
      {
        title: "Star Wars: Episode IV - A New Hope",
        episode_id: 4,
        release_date: "1977-05-25",
        opening_crawl: "loream lipsm",
        director: "loream lipsm",
        producer: "loream lipsm",
      },
    ]);
  });

  it("Multiple matches found", () => {
    const result = getFilteredMovie(moviesList, "Star Wars", "episode_id");
    expect(result).toEqual(moviesList);
  });

  it('sorts movies by release date if orderBy is "release_date"', () => {
    const result = getFilteredMovie(moviesList, "", "release_date");
    expect(result).toEqual([
      {
        title: "Star Wars: Episode VI - Return of the Jedi",
        episode_id: 6,
        release_date: "1983-05-25",
        opening_crawl: "loream lipsm",
        director: "loream lipsm",
        producer: "loream lipsm",
      },
      {
        title: "Star Wars: Episode V - The Empire Strikes Back",
        episode_id: 5,
        release_date: "1980-05-21",
        opening_crawl: "loream lipsm",
        director: "loream lipsm",
        producer: "loream lipsm",
      },
      {
        title: "Star Wars: Episode IV - A New Hope",
        episode_id: 4,
        release_date: "1977-05-25",
        opening_crawl: "loream lipsm",
        director: "loream lipsm",
        producer: "loream lipsm",
      },
    ]);
  });

  it('sorts movies by episode ID if orderBy is "episode_id"', () => {
    const result = getFilteredMovie(moviesList, '', 'episode_id');
    expect(result).toEqual([
      {
        title: 'Star Wars: Episode IV - A New Hope',
        episode_id: 4,
        release_date: '1977-05-25',
        opening_crawl: "loream lipsm",
        director: "loream lipsm",
        producer: "loream lipsm",
      },
      {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        episode_id: 5,
        release_date: '1980-05-21',
        opening_crawl: "loream lipsm",
        director: "loream lipsm",
        producer: "loream lipsm",
      },
      {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        episode_id: 6,
        release_date: '1983-05-25',
        opening_crawl: "loream lipsm",
        director: "loream lipsm",
        producer: "loream lipsm",
      },
    ]);
  });

});
