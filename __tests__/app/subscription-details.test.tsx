import React from 'react';
import { render, screen } from '@testing-library/react-native';

jest.mock('expo-router', () => {
    const React = require('react');
    const { Text } = require('react-native');
    return {
        useLocalSearchParams: jest.fn(),
        Link: ({ href, children, ...props }: { href: any; children?: React.ReactNode; [key: string]: any }) => {
            const hrefString = typeof href === 'string' ? href : JSON.stringify(href);
            return <Text testID={`link-${hrefString}`} {...props}>{children}</Text>;
        },
    };
});

import { useLocalSearchParams } from 'expo-router';
import SubscriptionDetails from '@/app/[id]';

const mockUseLocalSearchParams = useLocalSearchParams as jest.Mock;

describe('SubscriptionDetails ([id] route)', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders without crashing when id is provided', () => {
        mockUseLocalSearchParams.mockReturnValue({ id: 'spotify' });
        render(<SubscriptionDetails />);
    });

    it('displays the subscription id in the title', () => {
        mockUseLocalSearchParams.mockReturnValue({ id: 'spotify' });
        render(<SubscriptionDetails />);
        expect(screen.getByText(/SubscriptionDetails: spotify/)).toBeTruthy();
    });

    it('displays a different id correctly', () => {
        mockUseLocalSearchParams.mockReturnValue({ id: 'claude' });
        render(<SubscriptionDetails />);
        expect(screen.getByText(/SubscriptionDetails: claude/)).toBeTruthy();
    });

    it('renders a "Go Back" link to root', () => {
        mockUseLocalSearchParams.mockReturnValue({ id: 'spotify' });
        render(<SubscriptionDetails />);
        expect(screen.getByText('Go Back')).toBeTruthy();
    });

    it('"Go Back" link points to "/"', () => {
        mockUseLocalSearchParams.mockReturnValue({ id: 'spotify' });
        render(<SubscriptionDetails />);
        expect(screen.getByTestId('link-/')).toBeTruthy();
    });

    it('handles numeric-looking id strings', () => {
        mockUseLocalSearchParams.mockReturnValue({ id: '123' });
        render(<SubscriptionDetails />);
        expect(screen.getByText(/SubscriptionDetails: 123/)).toBeTruthy();
    });

    it('renders nothing for id when id is empty string', () => {
        mockUseLocalSearchParams.mockReturnValue({ id: '' });
        render(<SubscriptionDetails />);
        // Component renders with empty id - the label text is just "SubscriptionDetails: "
        expect(screen.getByText(/SubscriptionDetails:/)).toBeTruthy();
    });

    it('renders nothing extra when id is undefined', () => {
        mockUseLocalSearchParams.mockReturnValue({});
        render(<SubscriptionDetails />);
        // useLocalSearchParams returns no id - should render without throwing
        expect(screen.getByText(/SubscriptionDetails:/)).toBeTruthy();
    });
});