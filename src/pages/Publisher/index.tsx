import React from 'react';
import { loadable } from 'helpers/loadable';
import { LoadingIndicator } from 'components/LoadingIndicator';

export default loadable(() => import('./Publisher'), {
    fallback: <LoadingIndicator />,
});
