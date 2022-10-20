import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";
import CoinsTable from "../components/CoinsTable";
import CryptoContext from "../CryptoContext";



test('should be able to type in the search field', () => {
    render(
        <CryptoContext>
            <BrowserRouter>
                <CoinsTable />
            </BrowserRouter>
        </CryptoContext>
    );
    const searchElement = screen.getByTestId(/search/i)
    userEvent.type(searchElement, "Bitcoin");
    expect(searchElement).toBeInTheDocument();
});
test('should be able to type in text in the Search field', () => {
    render(
        <CryptoContext>
            <BrowserRouter>
                <CoinsTable />
            </BrowserRouter>
        </CryptoContext>
    );
    const searchElement = screen.getByTestId(/search/i)
    expect(searchElement).toBeInTheDocument();
});