// jest.config.js
module.exports = {
    setupFilesAfterEnv: ['@testing-library/react'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jest-environment-jsdom',
    // Add the following line to enable ESM support
    type: 'module',
    // Add the following line to ignore the 'import' statement in tests
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
};
