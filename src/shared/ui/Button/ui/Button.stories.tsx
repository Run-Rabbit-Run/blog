import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    Button, ButtonBgColor, ButtonColor, ButtonTheme,
} from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const Square = Template.bind({});
Square.args = {
    children: 'Text',
    theme: ButtonTheme.SQUARE,
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    color: ButtonColor.PRIMARY,
};

export const InvertedColor = Template.bind({});
InvertedColor.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    color: ButtonColor.INVERTED,
};

export const BgPrimaryColor = Template.bind({});
BgPrimaryColor.args = {
    children: 'Text',
    theme: ButtonTheme.SQUARE,
    color: ButtonColor.PRIMARY,
    bgColor: ButtonBgColor.PRIMARY,
};

export const BgInvertedColor = Template.bind({});
BgInvertedColor.args = {
    children: 'Text',
    theme: ButtonTheme.SQUARE,
    color: ButtonColor.INVERTED,
    bgColor: ButtonBgColor.INVERTED,
};
