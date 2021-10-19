# semver-compare-action

This action compares two semver strings using the [semver-compare](https://www.npmjs.com/package/semver-compare) npm package.

## Inputs

### `left-semver`

**Required** The left semver to compare.

### `right-semver`

**Required** The right semver to compare.

## Outputs

### `compare-value`

If the semver `left-semver` is greater than `right-semver`, return `1`. If the semver string `right-semver` is greater than `left-semver`, return `-1`. If `left-semver` equals `right-semver`, return `0`.
