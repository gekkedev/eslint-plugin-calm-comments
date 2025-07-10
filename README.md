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
Disallows comments that are entirely uppercase.

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
