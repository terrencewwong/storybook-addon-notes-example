import React from 'react';
import { storiesOf } from '@storybook/react';

const Component = () => <div>Hello</div>

storiesOf('Component', module)
    .add('default', () => <Component />, { notes: 'A very simple component' });
