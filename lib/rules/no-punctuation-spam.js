'use strict';

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'disallow excessive punctuation in comments',
      category: 'Stylistic Issues',
      recommended: false,
    },
    schema: [],
    messages: {
      spam: 'Avoid excessive punctuation in comments (e.g. "!!!", "???", "...").',
    },
  },

  create(context) {
    // Match any sequence of at least two punctuation marks
    const PUNCTUATION_SPAM_REGEX = /[!?\.]{2,}/;

    return {
      Program() {
        const comments = context.getSourceCode().getAllComments();
        for (const comment of comments) {
          const text = comment.value;
          // detect punctuation spam like multiple exclamation points
          if (PUNCTUATION_SPAM_REGEX.test(text)) {
            context.report({
              loc: comment.loc,
              messageId: 'spam',
            });
          }
        }
      },
    };
  },
};
