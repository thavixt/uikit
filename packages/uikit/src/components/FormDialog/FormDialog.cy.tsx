import { composeStories } from '@storybook/react';
import { mount } from '@cypress/react';
import * as stories from './FormDialog.stories';

const { Default } = composeStories(stories);

describe('FormDialog component', () => {
   it('should render', () => {
      mount(<Default />);

      // @todo
   });
});