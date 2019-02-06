import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Basic from '../examples/Basic';
import SuperSimple from '../examples/SuperSimple';
import Disabled from '../examples/Disabled';
import TwoThumbs from '../examples/TwoThumbs';
import Vertical from '../examples/Vertical';
import MultipleThumbs from '../examples/MultipleThumbs';
import AllowOverlap from '../examples/AllowOverlap';
import BigSteps from '../examples/BigSteps';
import Labeled from '../examples/Labeled';

storiesOf('Range', module)
  .add('Basic', () => <Basic />)
  .add('Disabled', () => <Disabled />)
  .add('SuperSimple', () => <SuperSimple />)
  .add('Two thumbs', () => <TwoThumbs />)
  .add('Vertical', () => <Vertical />)
  .add('Multiple thumbs', () => <MultipleThumbs />)
  .add('Allow overlap', () => <AllowOverlap />)
  .add('Big steps', () => <BigSteps />)
  .add('Labeled', () => <Labeled />);
