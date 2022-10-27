import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import PageIcon from 'shared/assets/icons/page.svg';
import { ButtonBgColor, ButtonColor } from 'shared/ui/Button/ui/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({
    className,
}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
            data-testid="sidebar"
        >
            <Button
                className={cls.collapsedButton}
                type="button"
                onClick={onToggle}
                data-testid="sidebar-toggle"
                theme={ButtonTheme.SQUARE}
                color={ButtonColor.INVERTED}
                bgColor={ButtonBgColor.INVERTED}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    className={cls.item}
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.main}
                >
                    {collapsed ? <HomeIcon className={cls.icon} /> : t('Главная')}
                </AppLink>
                <AppLink
                    className={cls.item}
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.about}
                >
                    {collapsed ? <PageIcon className={cls.icon} /> : t('О сайте')}
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher collapsed={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
