// tslint:disable no-empty
import { shallow } from 'enzyme';
import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import { FileView } from '../../../components/FileView/index';
import { File, FileTypeFile } from '../../../modules/Files';
import { FileViewModeEdit, FileViewModePreview } from '../../../modules/FileView';

describe('', () => {
  const props = {
    file: {
      type: FileTypeFile as typeof FileTypeFile,
      repository: 'test git repo',
      path: '/foo.md',
      headline: '',
      tags: [],
      variables: [],
    },
    body: '',
    onPressEditButton: () => {},
    onPressPreviewButton: () => {},
    onChangeText: (_: File | null, __: string) => {},
  };

  describe.skip('when file is null', () => {
    it('has <Empty />', () => {
      const wrapper = shallow(<FileView {...props} file={null} mode={FileViewModeEdit} />);

      expect(wrapper.length).toBe(1);
      expect(wrapper.first().name()).toBe('Empty');
    });

    it('renders correctly', () => {
      const tree = renderer.create(<FileView {...props} file={null} mode={FileViewModeEdit} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe.skip('when mode is FileViewModeEdit', () => {
    it('has <EditMode />', () => {
      const wrapper = shallow(<FileView {...props} mode={FileViewModeEdit} />);

      expect(wrapper.length).toBe(1);
      expect(wrapper.first().name()).toBe('EditMode');
    });

    it('renders correctly', () => {
      const tree = renderer.create(<FileView {...props} mode={FileViewModeEdit} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe.skip('when mode is FileViewModePreview', () => {
    it('has <PreviewMode />', () => {
      const wrapper = shallow(<FileView {...props} mode={FileViewModePreview} />);

      expect(wrapper.length).toBe(1);
      expect(wrapper.first().name()).toBe('PreviewMode');
    });

    it('renders correctly', () => {
      const tree = renderer.create(<FileView {...props} mode={FileViewModePreview} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
