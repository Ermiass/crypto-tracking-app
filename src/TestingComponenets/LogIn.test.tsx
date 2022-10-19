/* eslint-disable func-names */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import CryptoContext from "../CryptoContext";
import Login from '../components/Authentication/Login';

test('includes an text fields with text "Enter-Email"', () => {
    render(
        <CryptoContext>
            <BrowserRouter>
                <Login handleClose={function (): void {
                    throw new Error('Function not implemented.');
                }} />
            </BrowserRouter>
        </CryptoContext>
    );

    const PasswordElement = screen.getByTestId('Enter-Email')
    expect(PasswordElement).toBeInTheDocument();

});
test('should render a button', () => {
    render(
        <CryptoContext>
            <BrowserRouter>
                <Login handleClose={function (): void {
                    throw new Error('Function not implemented.');
                }} />
            </BrowserRouter>
        </CryptoContext>
    );

    const Loginbutton = screen.getByRole('button', { name: /LOGIN/i });
    expect(Loginbutton).toBeInTheDocument();
});
test('should be able to type in password in the text feild', () => {
    render(
        <CryptoContext>
            <BrowserRouter>
                <Login handleClose={function (): void {
                    throw new Error('Function not implemented.');
                }} />
            </BrowserRouter>
        </CryptoContext>
    );
    const PasswordElement = screen.getByTestId(/Enter-Password/i)
    userEvent.type(PasswordElement, "New tittle");
    expect(PasswordElement).toBeInTheDocument();
});
test('should be able to type in email address in the text feild', () => {
    render(
        <CryptoContext>
            <BrowserRouter>
                <Login handleClose={function (): void {
                    throw new Error('Function not implemented.');
                }} />
            </BrowserRouter>
        </CryptoContext>
    );
    const loginElement = screen.getByTestId(/Enter-Email/i)
    userEvent.type(loginElement, "New tittle");
    expect(loginElement).toBeInTheDocument();
});
test('Login button should be disabled until all email and password fields are fulfilled', () => {
    render(
        <CryptoContext>
            <BrowserRouter>
                <Login handleClose={function (): void {
                    throw new Error('Function not implemented.');
                }} />
            </BrowserRouter>
        </CryptoContext>
    );
    const Loginbutton = screen.getByRole('button', { name: /LOGIN/i });
    expect(Loginbutton).toBeDisabled();
});
test('should the button have attribute submit', () => {
    render(
        <CryptoContext>
            <BrowserRouter>
                <Login handleClose={function (): void {
                    throw new Error('Function not implemented.');
                }} />
            </BrowserRouter>
        </CryptoContext>
    );

    const Loginbutton = screen.getByRole('button', { name: /LOGIN/i });
    expect(Loginbutton).toBeInTheDocument();
    expect(Loginbutton).toHaveAttribute('type', 'submit');
});
