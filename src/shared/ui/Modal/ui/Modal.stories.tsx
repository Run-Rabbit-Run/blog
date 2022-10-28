import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
    <ThemeProvider>
        <Modal {...args} />
    </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
    children: 'Lorem100',
    onClose: null,
};
