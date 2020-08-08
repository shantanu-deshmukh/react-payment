import React from 'react';
import { render } from '@testing-library/react';

import PayForm from './pay-form';

describe(' PayForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PayForm />);
    expect(baseElement).toBeTruthy();
  });
});
