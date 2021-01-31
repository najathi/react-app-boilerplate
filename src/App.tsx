import React from 'react';

import './styles/Web.scss';

import styles from "./App.module.scss";
import BlankScreen from './screens/BlankScreen/BlankScreen';

function App() {

  return (
    <div className={styles.app}>
      <p className={styles.text}>Sample</p>
      <BlankScreen />
    </div>
  );

}

export default App;
