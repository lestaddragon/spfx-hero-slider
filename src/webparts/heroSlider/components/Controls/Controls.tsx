import * as React from 'react';
import { ControlsProps } from './ControlsProps';
import styles from './Controls.module.scss';

const Controls: React.StatelessComponent<ControlsProps> = ({goNext, goPrevious}) => {

  return (<nav className={styles.controls}>
    <button type="button" className={styles.arrowLeft} onClick={goPrevious}></button>
    <button type="button" className={styles.arrowRight} onClick={goNext}></button>
  </nav>);
}

export default Controls;