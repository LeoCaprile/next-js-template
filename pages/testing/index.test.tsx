import React from 'react';
import TestingPage, { getServerSideProps } from '.';
import { render } from '@testing-library/react';

describe('Testing the testing page', () => {
  const text = 'Hello World!';

  it('getServerSideProps return the correct text "HelloWorld!"', async () => {
    // Arrange
    const response = await getServerSideProps();
    const expectedResponse = { props: { text } };
    //Act
    // * Nothing because this is a test example
    //Assert
    expect(response).toEqual(expectedResponse);
  });

  it('Component is rendering', () => {
    const component = render(<TestingPage text={text} />);
  });
});
