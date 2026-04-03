import React from 'react';
import { View } from 'react-native';

const useSafeAreaInsets = jest.fn(() => ({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
}));

const SafeAreaView = ({ children, ...props }: { children?: React.ReactNode; [key: string]: any }) => (
    <View {...props}>{children}</View>
);

const SafeAreaProvider = ({ children }: { children?: React.ReactNode }) => <>{children}</>;

export { useSafeAreaInsets, SafeAreaView, SafeAreaProvider };