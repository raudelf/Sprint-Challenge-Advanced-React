import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, getByTestId } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Theme Button is Displaying', () =>{
  const { getByTestId } = render(<App />);
  getByTestId(/changetheme/i)
})

test('Page Header Displaying', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/changetheme/i);
})

test('Players are Displaying', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/displayplayers/i);
})
