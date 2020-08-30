import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Button } from '../_UI';

const Banner = () => {
    const [spin, setSpin] = useState(0);
    const [imgSize, setImgSize] = useState(400);

    return (
        <div className={styles.container}>
            <img
                className={`${styles.img} ${spin > 0 && styles.rotate90} 
                ${spin < 0 && styles.rotate270}`}
                src='https://1.bp.blogspot.com/-Me6iXuyaD3I/XYnMsXHljWI/AAAAAAAAB1s/sYJypEwEt6EXQGeUVi_lOt2GFjil1tn4gCLcBGAsYHQ/s320/superman-logo-012.png'
                style={{
                    height: imgSize,
                    width: imgSize,
                }}
            />
            <Button
                className={styles.button1}
                onClick={() => setSpin(1)}
                text={'Повернути на +90'}
            />
            <Button
                className={styles.button2}
                onClick={() => setSpin(-1)}
                text={'Повернути на 270'}
            />
            <Button className={styles.button3} onClick={() => setSpin(0)} text={'Cкидання'} />

            <Button
                className={styles.button2}
                onClick={() => setImgSize(imgSize - 10)}
                text={'Decrease by 10px'}
            />
            <Button
                className={styles.button2}
                onClick={() => setImgSize(imgSize + 10)}
                text={'Increase by 10px'}
            />
        </div>
    );
};

export default Banner;
