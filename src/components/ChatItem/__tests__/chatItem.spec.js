// тут налепил чето но работает

import { render, screen } from '@testing-library/react';
import { ChatItem } from '../chatItem';
import * as redux from 'react-redux'
import { Provider } from "react-redux";
import { store } from "../../../store";
import { BrowserRouter } from "react-router-dom";

describe('ChatItem', () => {
    it('ChatItemView to be in doc', () => {
        

        const spy = jest.spyOn(redux, 'useSelector')
        spy.mockReturnValue('1')

        const handleClick = jest.fn();
        render(<BrowserRouter><Provider store={store}><ChatItem onDelete={handleClick} id='1' name='test name' /></Provider></BrowserRouter>);
        const viewElement = screen.getByTestId('ChatItemViewButton');
        expect(viewElement).toBeInTheDocument();
    });
});