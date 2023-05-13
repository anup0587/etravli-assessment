import { render } from "@testing-library/react";
import RatingChips from "..";
import { convertToPercentage } from "../../../containers/MoviesContainer/helper";
import "@testing-library/jest-dom/extend-expect";

import { describe, expect, it } from "vitest";

describe('RatingChips', () => {
    const ratings = [
      { Source: 'IMDb', Value: '8.0/10' },
      { Source: 'Rotten Tomatoes', Value: '75%' },
      { Source: 'Metacritic', Value: '68/100' },
    ];
  
    it('renders chips with correct labels', () => {
        const { getAllByTestId } = render(<RatingChips ratings={ratings} />);
        const chips = getAllByTestId('chip');
    
        expect(chips.length).toBe(ratings.length);
    
        ratings.forEach((rating, index) => {
          expect(chips[index]).toHaveTextContent(`${rating.Source} - ${convertToPercentage(rating.Value)}`);
        });
      });
  
    it('matches snapshot', () => {
      const { container } = render(<RatingChips ratings={ratings} />);
      expect(container).toMatchSnapshot();
    });
  });