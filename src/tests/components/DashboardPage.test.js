import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test('Should test DashboardPage is properly rendered', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});