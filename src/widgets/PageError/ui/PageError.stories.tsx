import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageError } from 'widgets/PageError';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <ThemeProvider><PageError {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {};
