import { addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-addon-themes/react'; // <- or your storybook framework
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        list: [
            { name: 'dark', class: 'dark', color: '#00af49' },
        ],
    },
    backgrounds: {
        default: 'light-bg',
        values: [
            {
                name: 'light-bg',
                value: '#dbf3db',
            },
            {
                name: 'light-bg-inverted',
                value: '#003aff',
            },
            {
                name: 'dark-bg',
                value: '#002be0',
            },
            {
                name: 'dark-bg-inverted',
                value: '#dbf3db',
            },
        ],
    },
};

addDecorator(withThemes);
addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
