import React, { useState } from 'react';
import styles from './styles.module.scss';
 
const Banner= () => {

    const [spin,setSpin] = useState(0);
    
    return (
    <div className={styles.container}>
    <img className={`${ styles.img } ${ spin > 0 && styles.rotate90 } ${ spin < 0 && styles.rotate270 }`} src='https://1.bp.blogspot.com/-Me6iXuyaD3I/XYnMsXHljWI/AAAAAAAAB1s/sYJypEwEt6EXQGeUVi_lOt2GFjil1tn4gCLcBGAsYHQ/s320/superman-logo-012.png'></img>
    <button 

        className={styles.button1}
            onClick= { () => setSpin(1) }
    >
        Повернути на +90
    
    </button>
    <button 
    
        className={styles.button2} 
        onClick= { () => setSpin(-1) }
    >
        Повернути на 360
    </button>
    
    <button
        className={styles.button3}
        onClick= { () => setSpin(0) }
    >
        скидання
    </button>
    </div>
    
    );
};

export default Banner;  
