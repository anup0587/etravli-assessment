import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import RatingStar from '..';


describe('RatingStar', () => {
  const props = {
    subTitle: 'Average rating',
    averageRating: 7.5,
  };

  it('matches snapshot', () => {
    const { container } = render(<RatingStar {...props} />);
    expect(container).toMatchSnapshot();
  });
});
