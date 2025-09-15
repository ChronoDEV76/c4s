module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Allow only our common types
    'type-enum': [2, 'always', [
      'feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'chore', 'ci'
    ]],
    // Keep titles readable
    'header-max-length': [2, 'always', 100],
    // Prefer lowercase, imperative subject; disallow capitalized styles
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    // No trailing period in subject
    'subject-full-stop': [2, 'never', '.'],
    // If a scope is used, keep it kebab-case (scope is optional)
    'scope-case': [2, 'always', 'kebab-case'],
  },
};
