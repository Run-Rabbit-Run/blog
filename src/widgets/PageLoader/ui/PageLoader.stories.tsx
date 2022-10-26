import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageLoader } from 'widgets/PageLoader';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export default {
    title: 'widgets/PageLoader',
    component: PageLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => <ThemeProvider><PageLoader {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {};
