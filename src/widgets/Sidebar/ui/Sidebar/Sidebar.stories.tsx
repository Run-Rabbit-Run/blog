import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from 'widgets/Sidebar';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <ThemeProvider><Sidebar {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {};
