module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'clover'],
  testRegex: '.*\\.integration\\.ts$',
  moduleDirectories: ['src', 'node_modules'],
};
