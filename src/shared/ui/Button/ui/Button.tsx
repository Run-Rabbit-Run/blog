import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    SQUARE = 'square'
}

export enum ButtonColor {
    PRIMARY = 'color-primary',
    INVERTED = 'color-inverted',
}

export enum ButtonBgColor {
    PRIMARY = 'bg-color-primary',
    INVERTED = 'bg-color-inverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    color?: ButtonColor;
    bgColor?: ButtonBgColor;
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    color = ButtonColor.PRIMARY,
    bgColor = ButtonBgColor.PRIMARY,
    ...otherProps
}) => {
    const additionalClasses = [className, cls[theme], cls[color], cls[bgColor]];

    return (
        <button
            className={classNames(cls.button, {}, additionalClasses)}
            type="button"
            {...otherProps}
        >
            {children}
        </button>
    );
};
