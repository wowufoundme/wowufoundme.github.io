const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'v2-source',
    repo: 'https://github.com/wowufoundme/wowufoundme.github.io.git'
  },
  () => {
    console.log('Deploy Complete!');
  }
);
