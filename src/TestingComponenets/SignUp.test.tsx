/* eslint-disable func-names */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Signup from "../components/Authentication/Signup";
import CryptoContext from "../CryptoContext";


test('should render a button', () => {
    render(
        <CryptoContext>
            <BrowserRouter>
                <Signup handleClose={function (): void {
                    throw new Error('Function not implemented.');
                }} />
            </BrowserRouter>
        </CryptoContext>
    );
    const buttonElement = screen.getByRole('button', {name:/SIGN UP/i});
    expect(buttonElement).toBeInTheDocument();
});

test('includes a Text fields with text "email/"', () => {
    render(
        <CryptoContext>
            <BrowserRouter>
                <Signup handleClose={function (): void {
                    throw new Error('Function not implemented.');
                }} />
            </BrowserRouter>
        </CryptoContext>
    );

    const inputElement = screen.getByTestId(/email/i)
    expect(inputElement).toBeInTheDocument();

});
test('includes a Text fields with text "password"', () => {
    render(
        <CryptoContext>
            <BrowserRouter>
                <Signup handleClose={function (): void {
                    throw new Error('Function not implemented.');
                }} />
            </BrowserRouter>
        </CryptoContext>
    );

    const passwordElement = screen.getByTestId(/password/i)
    expect(passwordElement).toBeInTheDocument();

});
 test('should the button have attribute submit', () => {
    render(
        <CryptoContext>
        <BrowserRouter>
            <Signup handleClose={function (): void {
                throw new Error('Function not implemented.');
            }} />
        </BrowserRouter>
    </CryptoContext>
);
    const buttonElement = screen.getByRole('button', {name:/SIGN UP/i});
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });
test('Login button should be disabled until all email and password fields are fulfilled', () => {
    render(
                <CryptoContext>
                <BrowserRouter>
                    <Signup handleClose={function (): void {
                        throw new Error('Function not implemented.');
                    }} />
                </BrowserRouter>
            </CryptoContext>
        );
    const buttonElement = screen.getByRole('button', {name:/SIGN UP/i});
    expect(buttonElement).toBeDisabled();
});