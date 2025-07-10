'use strict';

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'disallow comments that are mostly uppercase',
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
          // calculate ratio of uppercase letters to total letters
          const letters = text.match(/[a-z]/gi) || [];
          const uppercaseCount = (text.match(/[A-Z]/g) || []).length;
          const ratio = letters.length === 0 ? 0 : uppercaseCount / letters.length;

          // Allow comments that are short abbreviations of up to 4 letters
          if (letters.length <= 4) {
            continue;
          }

          // report comments that are mostly uppercase (>50%)
          if (ratio > 0.5) {
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
