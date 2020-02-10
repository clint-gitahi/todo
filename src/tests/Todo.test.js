import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Todo from '../components/Todo';
import TodoList from '../components/TodoList';

test('renders TODO without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Todo />, div);
});

// using shallow.
test('render TODOLIST  without crashing', () => {
  shallow(<TodoList />);
});

it('renders todolist', () => {
  const wrapper = shallow(<TodoList />);
  const header = (
    <h1>
      Todo list <span>Simple Todo List App</span>
    </h1>
  );

  expect(wrapper.contains(header)).toEqual(true);
});
