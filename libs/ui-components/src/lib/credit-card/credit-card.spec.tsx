import React from 'react';
import { render } from '@testing-library/react';

import CreditCard from './credit-card';

describe(' CreditCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreditCard />);
    expect(baseElement).toBeTruthy();
  });
});
