import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NewForm from '../components/newTodoForm';

test('should render NewForm component without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<NewForm />, div);
});

// test('should handle onSubmit handler', () => {
//   const onSubmitSpy = jest.fn();
//   const wrapper = shallow(<NewForm />);
//   expect(wrapper).toMatchSnapshot();
// });
