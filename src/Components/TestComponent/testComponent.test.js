import {render, screen} from '@testing-library/react';
import TestComponent from './index';

// const roles = [
//   'link',
//   'contentinfo',
//   'heading',
//   'banner',
//   'img',
//   'checkbox',
//   'spinbutton',
//   'radio',
//   'textbox',
//   'listitem',
//   'list'
// ]

test("can find elements by role", ()=> {
  render(<TestComponent/>)

  const linkElem = screen.getByRole('link');
  expect(linkElem).toBeInTheDocument();

  const contentInfoElem = screen.getByRole('contentinfo');
  expect(contentInfoElem).toBeInTheDocument();
});

// accessible name is text content within the 'opening and closing brackets of the elem'
test('can find elements by accessible name', ()=> {
  render(<TestComponent/>)
  const submitButton= screen.getByRole('button', {name: 'Submit'});

  expect(submitButton).toBeInTheDocument();
})

// find multiple elements
test('can find elements by accessible name', ()=> {
  render(<TestComponent/>)
  const buttons= screen.getAllByRole('button');

  expect(buttons[0]).toBeInTheDocument();
  expect(buttons[1]).toBeInTheDocument();
  expect(buttons).toHaveLength(2);
})