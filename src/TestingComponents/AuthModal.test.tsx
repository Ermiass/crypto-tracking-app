import React from 'react';import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import AuthModal from "../common/components/Authentication/AuthModal";
import CryptoContext from "../app/CryptoContext";


test('should render a button', () => {
    render(
        <CryptoContext>
            <BrowserRouter>
                <AuthModal />
            </BrowserRouter>
        </CryptoContext>
    );
    
    const MainLoginbutton = screen.getByRole('button', { name: /LOGIN/i });
    expect(MainLoginbutton).toBeInTheDocument();
});
test('should the button have attribute submit', () => {
    render(
        <CryptoContext>
            <BrowserRouter>
            <AuthModal />
            </BrowserRouter>
        </CryptoContext>
    );

    const MainLoginbutton = screen.getByRole('button', { name: /LOGIN/i });
    expect(MainLoginbutton).toBeInTheDocument();
    expect(MainLoginbutton).toHaveAttribute('type', 'submit');
});
