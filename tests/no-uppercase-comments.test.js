const { RuleTester } = require('eslint');
const rule = require('../lib/rules/no-uppercase-comments');

const tester = new RuleTester();

tester.run('no-uppercase-comments', rule, {
  valid: [
    { code: '// This is calm.' },
    { code: '// Not all CAPS here.' },
    { code: '//also accepted without a space prefix' },
    { code: '// KISS' }, // abbreviation
    { code: '// HTML' }, // abbreviation
    { code: '// NASA' }, // abbreviation
    { code: '//' }, // empty comment
  ],
  invalid: [
    { code: '// THIS IS YELLING', errors: [{ messageId: 'yelling' }] },
    { code: '// this is PARTIAL YELLING', errors: [{ messageId: 'yelling' }] },
    { code: '// WHY IS THE CODE NOT WORKING?', errors: [{ messageId: 'yelling' }] },
    { code: '// YELLING', errors: [{ messageId: 'yelling' }] }, // too long to be an abbreviation
  ],
});
