import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MockAsyncStorage from 'mock-async-storage';

Enzyme.configure({ adapter: new Adapter() });

const mock = () => {
  const mockImpl = new MockAsyncStorage();
  jest.mock('AsyncStorage', () => mockImpl);
};
mock();

export default null;
