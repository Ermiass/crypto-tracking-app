import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import CryptoContext from "../CryptoContext";
import Header from '../components/Header';

test('should be able to select a currency from the select menu', () => {
    render(
        <CryptoContext>
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        </CryptoContext>
    );
    const select =screen.getByTestId('currency');
    fireEvent.change(select, { target: { value: 'USD' } });
});