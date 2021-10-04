import { render, fireEvent  } from '@testing-library/react';
import { ChatItemView } from '../chatItemView';
import { BrowserRouter } from "react-router-dom";

describe('ChatItemView', () => {
    it('ChatItemView click', () => {
        const handleClick = jest.fn();
        const component = render(<BrowserRouter><ChatItemView onDelete={handleClick} id='1' name='test name'/></BrowserRouter>);

        const clickable = component.getByTestId('ChatItemViewButton');
        fireEvent(clickable, new MouseEvent('click', { bubbles: true }));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});