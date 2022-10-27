import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button';

describe('Button', () => {
    test('to be in the document', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('with only first param', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
