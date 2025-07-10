# eslint-plugin-calm-comments 💌

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
Disallows comments that are entirely uppercase. Short abbreviations up to four
letters such as `NASA`, `HTML` or `KISS` are allowed. Words longer than four
letters like `UNESCO` will still be reported.

Yelling in an academic sense is when a text is written in all-uppercase, which
in most educated contexts is perceived as shouting. The rule tries to walk a
tight line between letting short outbursts or curses pass while preventing long
blocks of uppercase that clearly read like yelling. Like any ESLint rule it is
opinionated and can cause friction for some developers.

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
