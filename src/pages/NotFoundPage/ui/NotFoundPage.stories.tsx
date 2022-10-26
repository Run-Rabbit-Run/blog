import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { NotFoundPage } from 'pages/NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => (
    <ThemeProvider>
        <NotFoundPage {...args} />
    </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
