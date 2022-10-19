import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";
import CoinsTable from "../components/CoinsTable";
import CryptoContext from "../CryptoContext";



test('should be able to type in the search feild', () => {
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
test('includes an text fields with text "Search For a Crypto Currency.."', () => {
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