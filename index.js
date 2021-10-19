const core = require('@actions/core');
const github = require('@actions/github');
const cmp = require('semver-compare');

try {
  const leftSemver = core.getInput('left-semver');
  const rightSemver = core.getInput('right-semver');
  core.setOutput("compare-value", cmp(leftSemver, rightSemver));
} catch (error) {
  core.setFailed(error.message);
}
