import ModalYesNoDialog from './components/ModalYesNoDialog';
import React from 'react';

export const App = () => {
    return (
        <span>
            <span>ModalYesNoDialog example</span>

            <ModalYesNoDialog isVisible="true" title="test" description="this is a test" />
        </span>
    )
}