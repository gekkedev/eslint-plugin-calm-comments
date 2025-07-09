const { RuleTester } = require('eslint');
const rule = require('../lib/rules/no-uppercase-comments');

const tester = new RuleTester();

tester.run('no-uppercase-comments', rule, {
  valid: [
    { code: '// This is calm.' },
    { code: '// Not all CAPS here.' },
  ],
  invalid: [
    { code: '// THIS IS YELLING', errors: [{ messageId: 'yelling' }] },
    { code: '// WHY ARE YOU YELLING?', errors: [{ messageId: 'yelling' }] },
  ],
});
