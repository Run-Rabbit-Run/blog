import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from '../../../config/i18n/i18nForTests';

export interface renderComponentOptions {
    route?: string;
}

export function renderComponent(component: ReactNode, options: renderComponentOptions = {}) {
    const {
        route = RoutePath.main,
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
