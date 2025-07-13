# eslint-plugin-calm-comments 💌

[![npm](https://img.shields.io/npm/v/eslint-plugin-calm-comments.svg)](https://www.npmjs.com/package/eslint-plugin-calm-comments)
[![Publish to npm & GitHub Pages](https://github.com/gekkedev/eslint-plugin-calm-comments/actions/workflows/publish.yml/badge.svg)](https://github.com/gekkedev/eslint-plugin-calm-comments/actions/workflows/publish.yml)

ESLint plugin that keeps comments calm and collected (=more readable).

## Install

```bash
npm install eslint-plugin-calm-comments --save-dev
```

## Usage

Add `calm-comments` to the plugins section and enable the rules you want.

```json
{
  "plugins": ["calm-comments"],
  "rules": {
    "calm-comments/no-uppercase-comments": "warn",
    "calm-comments/no-punctuation-spam": "warn"
  }
}
```

## Rules

### `no-uppercase-comments`
Disallows comments that are entirely or mostly uppercase.

Yelling in an academic sense is when a text is written in all-uppercase, which
in most educated contexts is perceived as shouting. The rule tries to walk a
tight line between tolerating short outbursts or curses while preventing long
blocks of uppercase that clearly read like yelling. Like any ESLint rule, it is
arbitrary (as are most ESLint rules) and can cause friction for some developers ¯\\_(ツ)_/¯.
Curse speeches are still possible despite using this linting rule when maintaining [properly-cased and civil, yet *extremely legendary*™️ manners](https://github.com/gco/xee/blob/4fa3a6d609dd72b8493e52a68f316f7a02903276/XeePhotoshopLoader.m#L108).

#### Abbreviation tradeoff
Regardless of relevance, short abbreviations of up to four
letters such as `NASA`, `HTML` or `KISS` are allowed. Words longer than four
letters like `UNESCO` would be reported as rule violations.

#### BAD
```js
// THIS IS YELLING
// WHY IS THE CODE NOT WORKING?
```

#### GOOD
```js
// This is calm.
// Not all CAPS here.
```

### `no-punctuation-spam`
Reports comments with long sequences of punctuation such as `!!`,, `!!!`, `???`, or `...`.

#### BAD
```js
// OMG!!!
// What???
// ........
```

#### GOOD
```js
// This is fine.
// still fine!
// What?
```

## License

MIT
