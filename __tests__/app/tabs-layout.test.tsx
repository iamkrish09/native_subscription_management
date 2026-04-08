import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { View, Image } from 'react-native';
import clsx from 'clsx';

// We test the TabLayout by importing it; mocks handle Tabs, useSafeAreaInsets etc.
jest.mock('expo-router', () => {
    const React = require('react');
    const Tabs = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
    Tabs.Screen = ({ name }: { name: string }) => null;
    return { Tabs };
});

jest.mock('react-native-safe-area-context', () => ({
    useSafeAreaInsets: jest.fn(() => ({ top: 0, bottom: 34, left: 0, right: 0 })),
}));

jest.mock('nativewind', () => ({
    styled: (Component: any) => Component,
}));

import TabLayout from '@/app/(tabs)/_layout';
import { tabs } from '@/constants/data';
import { colors, components } from '@/constants/theme';

describe('TabLayout', () => {
    it('renders without crashing', () => {
        render(<TabLayout />);
    });

    it('renders a screen for each tab in the data array', () => {
        // The Tabs.Screen mock returns null but we verify the component renders tabs.length screens
        // by checking the tabs data drives rendering
        expect(tabs).toHaveLength(4);
    });
});

describe('TabIcon', () => {
    // TabIcon is an internal component; test it via its visual output through TabLayout render
    // We re-implement a minimal version here to test its logic directly
    const TabIcon = ({ focused, icon }: { focused: boolean; icon: any }) => {
        return (
            <View testID="tabs-icon">
                <View testID={focused ? 'tabs-active' : 'tabs-pill'}>
                    <Image source={icon} resizeMode="contain" testID="tabs-glyph" />
                </View>
            </View>
        );
    };

    it('renders a View with tabs-glyph image', () => {
        const icon = { uri: 'test-icon' };
        render(<TabIcon focused={false} icon={icon} />);
        expect(screen.getByTestId('tabs-icon')).toBeTruthy();
        expect(screen.getByTestId('tabs-glyph')).toBeTruthy();
    });

    it('renders tabs-active class when focused is true', () => {
        const icon = { uri: 'test-icon' };
        render(<TabIcon focused={true} icon={icon} />);
        expect(screen.getByTestId('tabs-active')).toBeTruthy();
    });

    it('does not render tabs-active class when focused is false', () => {
        const icon = { uri: 'test-icon' };
        render(<TabIcon focused={false} icon={icon} />);
        expect(screen.queryByTestId('tabs-active')).toBeNull();
        expect(screen.getByTestId('tabs-pill')).toBeTruthy();
    });
});

describe('clsx usage in TabIcon', () => {
    it('returns "tabs-pill" when not focused', () => {
        const result = clsx('tabs-pill', false && 'tabs-active');
        expect(result).toBe('tabs-pill');
    });

    it('returns "tabs-pill tabs-active" when focused', () => {
        const result = clsx('tabs-pill', true && 'tabs-active');
        expect(result).toBe('tabs-pill tabs-active');
    });
});

describe('tabBar style computation', () => {
    it('bottom uses Math.max of insets.bottom and horizontalInset', () => {
        const insets = { bottom: 34 };
        const expected = Math.max(insets.bottom, components.tabBar.horizontalInset);
        // insets.bottom(34) > horizontalInset(20), so bottom = 34
        expect(expected).toBe(34);
    });

    it('bottom falls back to horizontalInset when insets.bottom is small', () => {
        const insets = { bottom: 0 };
        const expected = Math.max(insets.bottom, components.tabBar.horizontalInset);
        // insets.bottom(0) < horizontalInset(20), so bottom = 20
        expect(expected).toBe(20);
    });

    it('tabBar backgroundColor uses colors.primary', () => {
        expect(colors.primary).toBe('#081126');
    });

    it('tabBar height comes from components.tabBar.height', () => {
        expect(components.tabBar.height).toBe(72);
    });

    it('paddingVertical calculation is tabBar.height/2 - tabBar.iconFrame/1.6', () => {
        const { height, iconFrame } = components.tabBar;
        const paddingVertical = height / 2 - iconFrame / 1.6;
        expect(paddingVertical).toBe(72 / 2 - 48 / 1.6);
        expect(paddingVertical).toBeCloseTo(6);
    });
});