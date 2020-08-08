import React from 'react';
import { render } from '@testing-library/react';

import PayPage from './pay-page';

describe(' PayPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PayPage />);
    expect(baseElement).toBeTruthy();
  });
});
