/** @type {import('jest').Config} */
const config = {
    preset: 'jest-expo',
    setupFiles: ['<rootDir>/jest.setup.js'],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    moduleNameMapper: {
        // Mock CSS files BEFORE @/ alias so they are not resolved to actual CSS
        '\\.css$': '<rootDir>/__mocks__/fileMock.js',
        '^@/(.*)$': '<rootDir>/$1',
        // Prevent expo's winter runtime lazy getters from firing during teardown
        '^expo/src/winter/.*$': '<rootDir>/__mocks__/expoWinterRuntime.js',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(.pnpm|react-native|@react-native|@react-native-community|expo|@expo|@expo-google-fonts|react-navigation|@react-navigation|@sentry/react-native|native-base|nativewind|tailwindcss|clsx))',
    ],
};

module.exports = config;