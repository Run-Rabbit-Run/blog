import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args: Record<string, unknown>) => <ThemeProvider><MainPage {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {};
