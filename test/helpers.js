// import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// global.expect = expect;
// global.mount = mount;
// global.shallow = shallow;