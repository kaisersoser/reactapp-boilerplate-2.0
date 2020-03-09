import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let startLogout, wrapper;

beforeEach(() => {    
    startLogout = jest.fn();
    wrapper = shallow(<Header  startLogout={startLogout}/>);
});

test('Should test Header is properly rendered', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});


test('Should test the start logout click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
