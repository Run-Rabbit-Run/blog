import { screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('test render', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('test increment', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('test decrement', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
