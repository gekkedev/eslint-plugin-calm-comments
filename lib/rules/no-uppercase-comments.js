'use strict';

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'disallow all-uppercase comments',
      category: 'Stylistic Issues',
      recommended: false,
    },
    schema: [],
    messages: {
      yelling: 'Avoid using all-uppercase comments.',
    },
  },

  create(context) {
    return {
      Program() {
        const comments = context.getSourceCode().getAllComments();
        for (const comment of comments) {
          const text = comment.value.trim();
          // check for uppercase yelling in comments
          if (text.length > 0 && text === text.toUpperCase() && /[A-Z]/.test(text)) {
            context.report({
              loc: comment.loc,
              messageId: 'yelling',
            });
          }
        }
      },
    };
  },
};
