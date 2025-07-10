'use strict';

module.exports = {
  rules: {
    'no-uppercase-comments': require('./lib/rules/no-uppercase-comments'),
    'no-punctuation-spam': require('./lib/rules/no-punctuation-spam'),
  },
};
