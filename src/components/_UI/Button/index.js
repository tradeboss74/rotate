import React from 'react';
import styles from './styles.module.scss';

const Button = (props) => {
    return (
        <button className={`${styles.buttonContainer} ${props.className}`} onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default Button;
