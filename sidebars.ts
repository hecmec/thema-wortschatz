import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // English vocabulary sidebar
  englishSidebar: [
    {
      type: 'category',
      label: 'Vocabulaire Anglais',
      items: [
        'english/greetings',
        'english/numbers',
        'english/colors',
        'english/family',
        'english/food',
      ],
    },
  ],

  // Chinese vocabulary sidebar
  chineseSidebar: [
    {
      type: 'category',
      label: 'Vocabulaire Chinois',
      items: [
        'chinese/survival-phrases',
        'chinese/numbers',
        'chinese/colors',
        'chinese/family',
        'chinese/food',
      ],
    },
  ],
};

export default sidebars;
