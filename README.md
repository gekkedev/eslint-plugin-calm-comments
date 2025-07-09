# eslint-plugin-calm-comments 💌

ESLint plugin to keep comments calm and easy to read.

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

### `no-punctuation-spam`
Reports comments with long sequences of punctuation such as `!!!`, `???` or `...`.

## License

MIT
