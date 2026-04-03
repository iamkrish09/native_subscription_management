import React from 'react';

const Link = ({ href, children, ...props }: { href: any; children?: React.ReactNode; [key: string]: any }) => {
    const { Text } = require('react-native');
    const hrefString = typeof href === 'string' ? href : JSON.stringify(href);
    return <Text testID={`link-${hrefString}`} {...props}>{children}</Text>;
};

const Tabs = ({ children, screenOptions }: { children?: React.ReactNode; screenOptions?: any }) => {
    return <>{children}</>;
};

Tabs.Screen = ({ name, options }: { name: string; options?: any }) => null;

const useLocalSearchParams = jest.fn(() => ({}));
const useRouter = jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    navigate: jest.fn(),
}));

export { Link, Tabs, useLocalSearchParams, useRouter };