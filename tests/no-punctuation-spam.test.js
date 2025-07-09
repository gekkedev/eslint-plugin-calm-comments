const { RuleTester } = require('eslint');
const rule = require('../lib/rules/no-punctuation-spam');

const tester = new RuleTester();

tester.run('no-punctuation-spam', rule, {
  valid: [
    { code: '// This is fine.' },
    { code: '// still fine!' },
    { code: '// What?' },
  ],
  invalid: [
    { code: '// OMG!!!', errors: [{ messageId: 'spam' }] },
    { code: '// What??', errors: [{ messageId: 'spam' }] },
    { code: '// What?!', errors: [{ messageId: 'spam' }] },
    { code: '// What???', errors: [{ messageId: 'spam' }] },
    { code: '// ........', errors: [{ messageId: 'spam' }] },
  ],
});
