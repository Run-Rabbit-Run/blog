import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar } from 'widgets/Navbar';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <ThemeProvider><Navbar {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {};
