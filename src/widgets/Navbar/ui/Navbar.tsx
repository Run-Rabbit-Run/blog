import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({
    className,
}: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos, eaque enim, illo laboriosam maxime nesciunt nisi odio officia placeat quia quisquam soluta vel! Alias autem eveniet necessitatibus officia repellendus soluta. Aliquid aperiam at beatae blanditiis commodi consectetur debitis dicta eveniet expedita facere laudantium nulla odit officiis optio placeat qui quia, quis quisquam repellat saepe sunt velit voluptatem voluptatum. Autem, deleniti dolorem hic inventore natus optio perferendis placeat quidem quisquam vero. Ad architecto asperiores aspernatur blanditiis deleniti dignissimos dolores ea expedita illo iusto, nisi nostrum quia reiciendis repellendus similique unde veritatis voluptatem voluptates? Culpa maiores natus provident soluta tempore, vel?')}
            </Modal>
        </div>
    );
};
