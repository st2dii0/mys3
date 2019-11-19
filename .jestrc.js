module.exports = {
    verbose: true,
    rootDir: '.',
    roots: ['<rootDir>/src/', '<rootDir>/tests/'],
     moduleDirectories: [ "node_modules" ],
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    // ignoring node modules and main entry point
    coveragePathIgnorePatterns: ['/node_modules/']
  }
  