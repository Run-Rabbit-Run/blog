import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => (
    <ThemeProvider>
        <AboutPage {...args} />
    </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
