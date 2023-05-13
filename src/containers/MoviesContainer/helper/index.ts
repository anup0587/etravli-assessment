import { MovieState } from "../../../store/movies/type";

export const convertToPercentage = (ratingValue: string) => {
  if (ratingValue.includes("/")) {
    // ratingValue is in the format "x/y"
    const [numerator, denominator] = ratingValue.split("/");
    const percentage = (parseFloat(numerator) / parseFloat(denominator)) * 100;
    return percentage.toFixed(0) + "%";
  }

  if (ratingValue.includes("%")) {
    // ratingValue is already in percentage format
    return ratingValue;
  }
};

export const calculateAverageRating = (ratings: any) => {
  let total = 0;
  let count = 0;
  if (ratings.length>0) {
    for (const rating of ratings) {
      const value = rating.Value;

      // Check if the value is in "X/Y" format (e.g. "8.3/10")
      const matchXY = value.match(/^(\d+(\.\d+)?)\/(\d+)$/);
      if (matchXY) {
        const numerator = parseFloat(matchXY[1]);
        const denominator = parseFloat(matchXY[3]);
        total += (numerator / denominator) * 10;
        count++;
      }

      // Check if the value is in "%" format (e.g. "83%")
      const matchPercent = value.match(/^(\d+)%$/);
      if (matchPercent) {
        const percent = parseFloat(matchPercent[1]);
        total += percent / 10;
        count++;
      }
    }
  }

  // Calculate and return the average rating, rounded to one decimal place
  return count ? Math.round((total / count) * 10) / 10 : 0;
};

export const getFilteredMovie = (
  moviesList: MovieState[],
  searchInput: string,
  newOrderBy: string
) => {
  const lowerCaseSearchInput = searchInput.toLowerCase().trim();

  const data = [...moviesList].sort((a, b) => {
    switch (newOrderBy) {
      case "release_date":
        return (
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
        );
      case "episode_id":
        return a.episode_id - b.episode_id;
      default:
        return 0;
    }
  });

  return lowerCaseSearchInput === ""
    ? data
    : data.filter((movie) =>
        movie.title.toLowerCase().includes(lowerCaseSearchInput)
      );
};
