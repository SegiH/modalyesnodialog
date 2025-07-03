import ModalYesNoDialog from './components/ModalYesNoDialog';
import React from 'react';
import { useState } from "react";

export const App = () => {
    const [isVisible, setIsVisible] = useState(true);

    const firstButtonEventHandler = () => {
        alert("OK was clicked");
        setIsVisible(false);
    }

    const secondButtonEventHandler = () => {
        alert("Cancel was clicked");
        setIsVisible(false);
    }

    return (
        <span>
            {!isVisible &&
                <span>ModalYesNoDialog example. Reload to see the example</span>
            }

            <ModalYesNoDialog isVisible={isVisible} title="test" description="this is a test" firstButtonText="Ok" firstButtonEventHandler={firstButtonEventHandler} secondButtonText="Cancel" secondButtonEventHandler={secondButtonEventHandler} />
        </span>
    )
}