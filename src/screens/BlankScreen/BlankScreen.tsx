import React from "react";

import styles from "./BlankScreen.module.scss";

const BlankScreen: React.FC<BlankScreenProps> = (props) => {

    return (

        <div className={styles.container}>
            <p className={styles.text}>Sample</p>
        </div>

    );
};

interface BlankScreenProps {
    [key: string]: any;
}

export default BlankScreen;
