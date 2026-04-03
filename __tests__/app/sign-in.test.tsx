import React from 'react';
import { render, screen } from '@testing-library/react-native';
import SignIn from '@/app/(auth)/sign-in';

describe('SignIn', () => {
    it('renders without crashing', () => {
        render(<SignIn />);
    });

    it('displays the SignIn text', () => {
        render(<SignIn />);
        expect(screen.getByText('SignIn')).toBeTruthy();
    });

    it('renders a "Go back" link', () => {
        render(<SignIn />);
        expect(screen.getByText('Go back')).toBeTruthy();
    });

    it('Go back link navigates to root "/"', () => {
        render(<SignIn />);
        const link = screen.getByTestId('link-/');
        expect(link).toBeTruthy();
    });

    it('does not render a "Create Account" link', () => {
        render(<SignIn />);
        expect(screen.queryByText('Create Account')).toBeNull();
    });

    it('does not link to /(auth)/sign-in (old href removed)', () => {
        render(<SignIn />);
        expect(screen.queryByTestId('link-/(auth)/sign-in')).toBeNull();
    });
});