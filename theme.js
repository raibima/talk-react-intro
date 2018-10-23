import { yellow } from 'mdx-deck/themes';

import CB from 'react-syntax-highlighter/styles/prism/cb';

export default {
  ...yellow,
  prism: {
    style: CB,
  },
};
