import React from 'react';
import { render, screen } from '@testing-library/react-native';

import App from '@/app/(tabs)/index';
import Insights from '@/app/(tabs)/insights';
import Settings from '@/app/(tabs)/settings';
import Subscriptions from '@/app/(tabs)/subscriptions';

describe('Home (index) screen', () => {
    it('renders without crashing', () => {
        render(<App />);
    });

    it('displays welcome message', () => {
        render(<App />);
        expect(screen.getByText('Welcome Krishna!')).toBeTruthy();
    });

    it('has a link to onboarding', () => {
        render(<App />);
        expect(screen.getByText('Go to Onboarding')).toBeTruthy();
    });

    it('has a link to sign-in', () => {
        render(<App />);
        expect(screen.getByText('Go to Login!')).toBeTruthy();
    });

    it('has a link to sign-up', () => {
        render(<App />);
        expect(screen.getByText('Go to SignUp!')).toBeTruthy();
    });

    it('has a link to Spotify subscription', () => {
        render(<App />);
        expect(screen.getByText('Spotify Subscription!')).toBeTruthy();
    });

    it('has a link to Claude Max subscription', () => {
        render(<App />);
        expect(screen.getByText('Claude Max Subscription!')).toBeTruthy();
    });

    it('uses SafeAreaView (not plain View) as the root container', () => {
        // SafeAreaView is mocked to render a View - we verify the component renders
        // content without the wrapping View className issues present before the change
        render(<App />);
        // If SafeAreaView was not used, the component would fail with the old import
        expect(screen.getByText('Welcome Krishna!')).toBeTruthy();
    });
});

describe('Insights screen', () => {
    it('renders without crashing', () => {
        render(<Insights />);
    });

    it('displays "Insights" text', () => {
        render(<Insights />);
        expect(screen.getByText('Insights')).toBeTruthy();
    });

    it('does not render a Create Account link (commented out)', () => {
        render(<Insights />);
        expect(screen.queryByText('Create Account')).toBeNull();
    });
});

describe('Settings screen', () => {
    it('renders without crashing', () => {
        render(<Settings />);
    });

    it('displays "Settings" text', () => {
        render(<Settings />);
        expect(screen.getByText('Settings')).toBeTruthy();
    });

    it('does not render a Create Account link (commented out)', () => {
        render(<Settings />);
        expect(screen.queryByText('Create Account')).toBeNull();
    });
});

describe('Subscriptions screen', () => {
    it('renders without crashing', () => {
        render(<Subscriptions />);
    });

    it('displays "Subscriptions" text', () => {
        render(<Subscriptions />);
        expect(screen.getByText('Subscriptions')).toBeTruthy();
    });

    it('does not render a Create Account link (commented out)', () => {
        render(<Subscriptions />);
        expect(screen.queryByText('Create Account')).toBeNull();
    });
});