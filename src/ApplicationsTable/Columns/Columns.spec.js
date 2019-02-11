import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Columns } from './Columns';
import styles from './Columns.module.css';

configure({ adapter: new Adapter() });

const fakeData = [
  {
    id: { value: 'LS 99 34 59 H' },
    location: { city: 'York' },
    name: { title: 'mr', first: 'karl', last: 'moreno' },
    picture: {},
  },
  {
    id: { value: 'KX 63 83 78 L' },
    location: { city: 'London' },
    name: { title: 'mrs', first: 'elizabeth', last: 'shelton' },
    picture: {},
  },
];

describe('ApplicationTable', () => {
  it('should move applications when button is clicked', () => {
    const subject = mount(<Columns initialApplications={fakeData} filterFn={() => true}/>);
    const columns = subject.find(`.${styles.columns}`)

    const col1Applications = columns.childAt(0).find('Application');
    const col2Applications = columns.childAt(1).find('Application');

    expect(col1Applications).toHaveLength(2);
    expect(col2Applications).toHaveLength(0);

    const applicationBtn = col1Applications.first().find('button');
    applicationBtn.simulate('click');

    const columnsAfter = subject.find(`.${styles.columns}`)
    const col1ApplicationsAfter = columnsAfter.childAt(0).find('Application');
    const col2ApplicationsAfter = columnsAfter.childAt(1).find('Application');

    expect(col1ApplicationsAfter).toHaveLength(1);
    expect(col2ApplicationsAfter).toHaveLength(1);
  })
});